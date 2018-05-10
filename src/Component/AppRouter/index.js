import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from './history';
import HomePage from './Pages/home/HomePage';
import Sidebar from './Pages/common/Sidebar';
import PostPage from './Pages/post/PostPage';

const AppRouter = () => (
  <div>
    <div className={'container'}>
      <div className={'row'}>
        <div className={'col-4'}>
          <Sidebar />
        </div>
        <div className={'col-8'}>
          <Router history={history}>
            <Switch>
              <Route path="/" component={HomePage} />
              <Route path="/:postId" component={PostPage} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  </div>
);

export default AppRouter;
