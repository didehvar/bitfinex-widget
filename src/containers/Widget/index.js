import React from 'react';
import { connect } from 'react-redux';

import './style.css';

const Widget = ({ name, symbol, children }) => (
  <div className="widget">
    <h3>{name}</h3>
    <div className="widget-child">{children(symbol)}</div>
  </div>
);

export default connect(state => ({ symbol: state.ui.symbol }))(Widget);
