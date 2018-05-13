import { combineReducers } from 'redux';

import books from './books';
import symbols from './symbols';
import tickers from './tickers';
import trades from './trades';

export default combineReducers({
  books,
  symbols,
  tickers,
  trades,
});
