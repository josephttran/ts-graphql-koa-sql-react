import React from 'react';

import './Register.css';
import RegisterUserForm from './RegisterUserForm';

const Register = () => {
  return(
    <div className='Register'>
      <div className='Register-header'>
        <h1>Signup</h1>
      </div>
      <RegisterUserForm />
    </div>
  )
};

export default Register;