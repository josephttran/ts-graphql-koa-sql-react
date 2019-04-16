import React from 'react';
import { Redirect } from 'react-router';
import { Mutation } from 'react-apollo';
import { Formik, Field, Form, FormikActions, ErrorMessage } from 'formik';

import { registerUserMutation } from '../../graphql/gqlMutation';
import { IRegisterValues } from '../../interfaces/formInterface';
import { validateRegisterForm } from '../../utils/validation';
import Auth from '../../utils/auth';

const RegisterUserForm = () => {
  return (
    <Mutation mutation={registerUserMutation()}>
    {
      (registerUser, result) => {
        if(result.data) {
          const token = result.data.registerUser.token

          if(token) {
            Auth.authenthicate(result.data.registerUser);

            return <Redirect to='/' />
          } 
        }
        
        return (
          <Formik 
            initialValues={{
              firstname: '',
              lastname: '',
              email: '',
              password: ''
            }}
            validateOnBlur={false}
            validateOnChange={false}
            validate={(values) => {
              const err = validateRegisterForm(values);

              if (err.firstname || err.lastname || err.email || err.password) {
                return err;
              }
            }}
            onSubmit={async (values: IRegisterValues, { setStatus, setSubmitting }: FormikActions<IRegisterValues>) => {
              try {
                await registerUser({ variables: { user: values} });
                setSubmitting(false);                           
              }
              catch(err) {
                setStatus({ status: 'error', message: 'Email already registered'});
              }
            }}
            render={(props) => (
              <Form className='Register-form'>
                <div className='Form-group'>
                  <label htmlFor='firstname'>
                    <div className='Form-label'>First Name</div>
                    <Field className='Form-input' id='firstname' name='firstname' placeholder='first' type='text' />
                  </label>
                  <ErrorMessage name='firstname' className='Error' component='div' />
                </div>
                <div className='Form-group'>
                  <label htmlFor='lastname'>
                    <div className='Form-label'>Last Name</div>
                    <Field className='Form-input' id='lastname' name='lastname' placeholder='last' type='text' />
                  </label>
                  <ErrorMessage name='lastname' className='Error' component='div' />
                </div>
                <div className='Form-group'>
                  <label htmlFor='email'>
                    <div className='Form-label'>Email</div>
                    <Field className='Form-input' id='email' name='email' placeholder='flast@example.com' type='email' />
                  </label>
                  <ErrorMessage name='email' className='Error' component='div' />
                </div>
                <div className='Form-group'>
                  <label htmlFor='password'>
                    <div className='Form-label'>Password</div>
                    <Field className='Form-input' id='password' name='password' placeholder='password' type='password' />
                  </label>
                  <ErrorMessage name='password' className='Error' component='div' />
                </div>
                <div className='Form-group'>
                  <button type='submit'>Signup</button>
                  <div className='Error'>{props.status ? props.status.message : ''}</div>
                  <a href='/login'>Cancel</a>
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

export default RegisterUserForm;