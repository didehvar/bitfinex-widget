import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import './App.css';

import Socket from './containers/Socket';
import Book from './containers/Book';
import Trades from './containers/Trades';

import ducks from './ducks';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(ducks, composeEnhancers(applyMiddleware(thunk)));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Socket />
          <Book symbol="tETHUSD" />
          {/* <Trades symbol="tETHUSD" /> */}
        </div>
      </Provider>
    );
  }
}

export default App;
