import React from 'react';

import './Login.css';
import { HelloQuery } from '../../graphql/query';
import { LoginUserForm } from './LoginUserForm';

const Login = () => {
  return(
    <div className='Login'>
      <HelloQuery />
      <div className='Login-header'>
        <h1>Login</h1>
      </div>
      <LoginUserForm />
    </div>
  )
};

export default Login;