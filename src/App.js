import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import './App.css';

import Ticker from './containers/Ticker';

import ducks from './ducks';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(ducks, composeEnhancers(applyMiddleware(thunk)));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Ticker />
      </Provider>
    );
  }
}

export default App;
