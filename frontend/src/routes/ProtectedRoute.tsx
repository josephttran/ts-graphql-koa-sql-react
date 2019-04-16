import React from 'react';
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router';

import Auth from '../utils/auth';

interface ProtectedRouteProps extends RouteProps {
  component: React.ComponentType<RouteComponentProps>
}

export const ProtectedRoute = ({ component: Component, ...rest }: ProtectedRouteProps) => {
  const render= (props: RouteComponentProps): React.ReactNode => {
    if (Auth.canAuthenticate()) {
      return <Component {...props} /> 
    } else {
      return <Redirect to={{ pathname: '/login' }} />
    }
  }

  return <Route {...rest} render={render} />
}
