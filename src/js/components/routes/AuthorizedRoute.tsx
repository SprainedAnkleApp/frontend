import { Route, Redirect, RouteProps } from 'react-router';
import { isAuthenticated } from '../../API/auth/methods';
import React from 'react';

export type AuthorizedRouteProps = RouteProps;

const AuthorizedRoute = ({ ...rest }: AuthorizedRouteProps) => {
  if (!isAuthenticated()) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: rest.location?.pathname },
        }}
      />
    );
  }
  return <Route {...rest} />;
};

export default AuthorizedRoute;
