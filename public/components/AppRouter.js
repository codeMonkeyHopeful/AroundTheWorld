import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import axios from 'axios';

import Home from './Home';
import Dashboard from './Dashboard';

const AppRouter = props => {
  return (
    <div id='main-container'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/dashboard' component={Dashboard} />
          <Redirect to='/error' />
        </Switch>
      </Router>
    </div>
  );
};

const mapDispatch = dispatch => ({});

export default connect(
  null,
  mapDispatch
)(AppRouter);
