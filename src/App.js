import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import './App.css';

import Socket from './containers/Socket';
import Book from './containers/Book';
import Trades from './containers/Trades';
import CloseWebsocketButton from './containers/CloseWebsocketButton';
import SymbolDropdown from './containers/SymbolDropdown';
import Widget from './containers/Widget';

import ducks from './ducks';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(ducks, composeEnhancers(applyMiddleware(thunk)));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Socket />
          <div>
            <CloseWebsocketButton />
            <SymbolDropdown />
          </div>
          <Widget name="Books">{symbol => <Book symbol={symbol} />}</Widget>
          <Widget name="Trades">{symbol => <Trades symbol={symbol} />}</Widget>
        </div>
      </Provider>
    );
  }
}

export default App;
