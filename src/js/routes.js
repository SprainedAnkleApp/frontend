import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Example } from './views/Example';
import { Main } from './views';
import { Login } from './views/Login';

const Routes = () => {
  return (
    <Switch>
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
