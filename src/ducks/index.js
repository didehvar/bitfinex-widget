import { combineReducers } from 'redux';

import data from './data';
import socket from './socket';
import ui from './ui';

export default combineReducers({
  data,
  socket,
  ui,
});
