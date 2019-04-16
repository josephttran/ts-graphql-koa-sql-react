import React from 'react';

import { Query } from 'react-apollo';
import { UserQuery } from '../graphql/query';

import Logout from './Logout';

const Home: React.FC = () => { 
  const user = localStorage.getItem('user');
  let email;

  if (user) {
    email = JSON.parse(user).email;  
  }

  return ( 
    <div>
      <h2>
        Hi <UserQuery email={email} />
      </h2>
      <Logout />
    </div>
  );
};

export default Home;
