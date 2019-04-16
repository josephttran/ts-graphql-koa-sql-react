import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import Auth from '../utils/auth';

const Logout = () => {
  const [isLoggedin, setIsLoggedIn] = useState(localStorage.getItem('token') ? true : false);

  const handleClick = () => {
    Auth.logout();
    setIsLoggedIn(false);
  }

  if (!isLoggedin) { 
    return <Redirect to={'/login'} />
  }

  return (
    <button onClick={handleClick}>Logout</button>
  )
}

export default Logout;
