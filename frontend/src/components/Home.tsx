import React, { useState } from 'react';

import Auth from '../utils/auth';
import { Redirect } from 'react-router-dom';

const Home: React.FC = (props) => { 
  const [isLoggedin, setIsLoggedIn] = useState(true);

  const logout = () => {
    console.log(Auth.isAuthenticated);  
    Auth.logout();
    setIsLoggedIn(false);

    return <Redirect to='/login' />  
  }

  if (!Auth.isAuthenticated) {
    return <Redirect to='/login' />        
  } 

  return (
    <div>
      <h2>Home</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
