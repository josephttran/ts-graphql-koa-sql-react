import React from 'react';
import { Redirect } from 'react-router';
import { Mutation } from 'react-apollo';
import { Formik, Field, Form, FormikActions, ErrorMessage } from 'formik';

import { loginUserMutation } from '../../graphql/gqlMutation';
import { ILoginValues } from '../../interfaces/formInterface';
import { validateLoginForm } from '../../utils/validation';
import Auth from '../../utils/auth';

export const LoginUserForm = () => {
  return (
    <Mutation mutation={loginUserMutation()}>
      {
        (loginUser, result) => {
          if(result.data) {
            const token = result.data.loginUser.token;

            if(token) {
              Auth.authenthicate(result.data.loginUser);
              
              return <Redirect to='/' />
            } 
          }

          return (
            <Formik
              initialValues={{ email: '', password: '' }}
              validateOnBlur={false}
              validateOnChange={false}
              validate={(values) => {
                const err = validateLoginForm(values);

                if (err.email || err.password) {
                  return err;
                }
              }}
              onSubmit={async (values: ILoginValues, { setStatus, setSubmitting,  }: FormikActions<ILoginValues>) => {
                try {
                  await loginUser({variables: { email: values.email, password: values.password }});
                  setSubmitting(false);
                } catch(err) {
                  setStatus({ status: 'error', message: 'Invalid user or password'});
                }
              }}
              render={(props) => (
                <Form className='Login-form'>
                  <div className='Form-group'>
                    <label htmlFor='email'>
                      <div className='Form-label'>Email</div>
                    </label>
                    <Field className='Form-input' id='email' name='email' placeholder='fl@example.com' type='email' />
                    <ErrorMessage className='Error' name='email' component='div' />              
                  </div>
                  <div className='Form-group'>
                    <label htmlFor='password'>
                      <div className='Form-label'>Password</div>
                    </label> 
                    <Field className='Form-input' id='password' name='password' placeholder='password' type='password' />
                    <ErrorMessage className='Error' name='password' component='div' />                            
                  </div>
                  <div className='Form-group'>
                    <button type='submit'>Login</button>
                    <div className='Error'>{props.status ? props.status.message : ''}</div>
                    <p>Don't have an account?</p>
                    <a href='/register'>Create Account</a>
                  </div>
                </Form>
              )}
            />
          )
        }
      }
    </Mutation>
  );
};
