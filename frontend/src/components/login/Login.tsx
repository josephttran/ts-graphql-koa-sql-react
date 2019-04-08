import React from 'react';
import { Formik, Field, Form, FormikActions, ErrorMessage } from 'formik';

import { LoginValues } from '../../interfaces/formInterface';
import { validateLoginForm } from '../../utils/validation';
import './Login.css';
import { HelloQuery } from '../../graphql/query';

const Login = () => {
  return(
    <div className='Login'>
      <HelloQuery />
      <div className='Login-header'>
        <h1>Login</h1>
      </div>
      <div>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          onSubmit={(values: LoginValues, { setSubmitting }: FormikActions<LoginValues>) => {
            setTimeout(() => {
              console.log(JSON.stringify(values));
              setSubmitting(false);
            }, 500);
          }}
          validate={(values) => {
            return validateLoginForm(values);
          }}
          render={() => (
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
              </div>
              <div className='Form-group'>
                <button type='submit' style={{ display: 'block' }}>Login</button>
                <p>Don't have an account?</p>
                <a>Create Account</a>
              </div>
            </Form>
          )}
        />
      </div>
    </div>
  )
};

export default Login;