import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Example } from './views/Example';
import { Main } from './views';
import { Login } from './views/Login';
import { PeaksList } from './views/PeaksList';
import AuthorizedRoute from './components/routes/AuthorizedRoute';
import { PeakDetails } from './views/PeaksList/PeakDetails';

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
      <Route path="/">
        <Main />
      </Route>
    </Switch>
  );
};

export default Routes;
