import React from 'react';
import { Formik, Field, Form, FormikActions } from 'formik';

import './Register.css';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  password: string
}

const Register = () => {
  return(
    <div className='Register'>
      <div className='Register-header'>
        <h1>Signup</h1>
      </div>
      <div>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
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
            <Form className='Register-form'>
              <div className='Form-group'>
                <div className='Form-label'>
                  <label htmlFor='firstName'>First Name</label>
                </div>
                <div className='field'>
                  <Field className='Form-input' id='firstName' name='firstName' placeholder='first' type='text' />
                </div>
              </div>
              <div className='Form-group'>
                <div className='Form-label'>
                  <label htmlFor='lastName'>Last Name</label>
                </div>
                <div>  
                  <Field className='Form-input' id='lastName' name='lastName' placeholder='last' type='text' />
                </div>
              </div>
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
                <button type='submit' style={{ display: 'block' }}>Signup</button>
                <a>Cancel</a>
              </div>
            </Form>
          )}
        />
      </div>
    </div>
  )
};

export default Register;