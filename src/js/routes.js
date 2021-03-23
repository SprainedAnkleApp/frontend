import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Example from './views/Example/Example';
import Main from './views/Main';

const Routes = () => {
  return (
    <Switch>
      <Route path="/exampleRoute">
        <Example />
      </Route>
      <Route path="/">
        <Main />
      </Route>
    </Switch>
  );
};

export default Routes;
