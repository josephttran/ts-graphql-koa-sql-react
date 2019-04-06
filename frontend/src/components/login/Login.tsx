import React from 'react';
import { Formik, Field, Form, FormikActions } from 'formik';

import './Login.css';

interface Values {
  email: string;
  password: string
}

const Login = () => {
  return(
    <div className='Login'>
      <div className='Login-header'>
        <h1>Login</h1>
      </div>
      <div>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          onSubmit={(values: Values, { setSubmitting }: FormikActions<Values>) => {
            setTimeout(() => {
              console.log(JSON.stringify(values));
              setSubmitting(false);
            }, 500);
          }}
          render={() => (
            <Form className='Login-form'>
              <div className='Form-group'>
                <div className='Form-label'>
                  <label htmlFor='email'>Email</label>
                </div>
                <div>  
                  <Field className='Form-input' id='email' name='email' placeholder='fl@example.com' type='email' />
                </div>
              </div>
              <div className='Form-group'>
                <div className='Form-label'>
                  <label htmlFor='password'>Password</label>
                </div>
                <div>  
                  <Field className='Form-input' id='password' name='password' placeholder='password' type='password' />
                </div>
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