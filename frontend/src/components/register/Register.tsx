import React from 'react';
import { Formik, Field, Form, FormikActions, ErrorMessage } from 'formik';

import { RegisterValues } from '../../interfaces/formInterface';
import { validateRegisterForm } from '../../utils/validation';
import './Register.css';

const Register = () => {
  return(
    <div className='Register'>
      <div className='Register-header'>
        <h1>Signup</h1>
      </div>
      <Formik 
        initialValues={{
          firstname: '',
          lastname: '',
          email: '',
          password: ''
        }}
        onSubmit={(values: RegisterValues, { setSubmitting }: FormikActions<RegisterValues>) => {
          setTimeout(() => {
            console.log(JSON.stringify(values));
            setSubmitting(false);
          }, 500);
        }}
        validate={(values) => {
          return validateRegisterForm(values);
        }}
        render={() => (
          <Form className='Register-form'>
            <div className='Form-group'>
              <label htmlFor='firstname'>
                <div className='Form-label'>First Name</div>
                <Field className='Form-input' id='firstname' name='firstname' placeholder='first' type='text' />
              </label>
              <ErrorMessage className='Error' name='firstname' component='div' />
            </div>
            <div className='Form-group'>
              <label htmlFor='lastname'>
                <div className='Form-label'>Last Name</div>
                <Field className='Form-input' id='lastname' name='lastname' placeholder='last' type='text' />
              </label>
              <ErrorMessage className='Error' name='lastname' component='div' />
            </div>
            <div className='Form-group'>
              <label htmlFor='email'>
                <div className='Form-label'>Email</div>
                <Field className='Form-input' id='email' name='email' placeholder='flast@example.com' type='email' />
              </label>
              <ErrorMessage className='Error' name='email' component='div' />
            </div>
            <div className='Form-group'>
              <label htmlFor='password'>
                <div className='Form-label'>Password</div>
                <Field className='Form-input' id='password' name='password' placeholder='password' type='password' />
              </label>
              <ErrorMessage className='Error' name='password' component='div' />
            </div>
            <div className='Form-group'>
              <button type='submit' style={{ display: 'block' }}>Signup</button>
              <a>Cancel</a>
            </div>
          </Form>
        )}
      />
    </div>
  )
};

export default Register;