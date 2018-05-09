import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import history from './history';
import HomePage from './Pages/HomePage';

const AppRouter = () => (
  <div>
    <Router history={history}>
      <Switch>
        <Route path="/" component={HomePage}/>
      </Switch>
    </Router>
  </div>
);

export default AppRouter;
