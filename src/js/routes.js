import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Example } from './views/Example';
import { Home } from './views/Home';
import { Login, SignUp, OAuthHandler } from './views/Auth';
import { PeaksList } from './views/PeaksList';
import AuthorizedRoute from './components/routes/AuthorizedRoute';
import { PeakDetails } from './views/Peak';

const Routes = () => {
  return (
    <Switch>
      <AuthorizedRoute path="/peaks/:id">
        <PeakDetails />
      </AuthorizedRoute>
      <AuthorizedRoute path="/peaks">
        <PeaksList />
      </AuthorizedRoute>
      <Route path="/exampleRoute">
        <Example />
      </Route>
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
