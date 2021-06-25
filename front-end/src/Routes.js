import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Pending from './pages/Pending';
import Done from './pages/Done';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={ () => <Redirect to="/pending" /> } />
      <Route exact path="/pending" component={ Pending } />
      <Route exact path="/done" component={ Done } />
    </Switch>
  );
}

export default Router;