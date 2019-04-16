import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ProtectedRoute } from './ProtectedRoute';
import Home from '../components/Home';
import Login from '../components/login/Login';
import Register from '../components/register/Register';
import NotFound from '../components/NotFound';

 class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <ProtectedRoute exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default Routes;