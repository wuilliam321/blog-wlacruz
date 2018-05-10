import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import history from './history';
import HomePage from './Pages/Posts/HomePage';
import Sidebar from './Pages/Common/Sidebar';
import PostPage from './Pages/Post/PostPage';

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
