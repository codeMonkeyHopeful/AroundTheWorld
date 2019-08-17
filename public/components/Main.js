import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../Redux/index';
import AppRouter from './AppRouter';

class Main extends Component {
  //set up the provider to allow all components to use the store
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default Main;
