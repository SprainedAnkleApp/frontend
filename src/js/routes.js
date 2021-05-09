import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './views/Home';
import { Login, SignUp, OAuthHandler } from './views/Auth';
import AuthorizedRoute from './components/routes/AuthorizedRoute';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/oauth2">
        <OAuthHandler />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <AuthorizedRoute path="/">
        <Home />
      </AuthorizedRoute>
    </Switch>
  );
};

export default Routes;
