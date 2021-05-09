import { Route, Redirect, RouteProps } from 'react-router';
import { isAuthenticated } from '../../API/auth/methods';
import React from 'react';

export type AuthorizedRouteProps = RouteProps & {
  component: React.Component;
};

const AuthorizedRoute = ({
  component: Component,
  ...rest
}: AuthorizedRouteProps) => {
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
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default AuthorizedRoute;
