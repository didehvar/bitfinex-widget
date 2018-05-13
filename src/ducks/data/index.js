import { combineReducers } from 'redux';

import books from './books';
import symbols from './symbols';

export default combineReducers({
  books,
  symbols,
});
