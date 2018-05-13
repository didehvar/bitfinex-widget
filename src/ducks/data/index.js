import { combineReducers } from 'redux';

import books from './books';
import symbols from './symbols';
import trades from './trades';

export default combineReducers({
  books,
  symbols,
  trades,
});
