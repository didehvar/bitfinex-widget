import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSymbols } from '../../ducks/data/symbols';
import { setSelectedSymbol } from '../../ducks/ui';

class SymbolDropdown extends Component {
  componentDidMount() {
    this.props.getSymbols();
  }

  handleChange = event => {
    this.props.setSelectedSymbol(event.target.value);
  };

  render() {
    const { symbols, symbol } = this.props;

    if (!symbols) return <div>Loading</div>;

    return (
      <select name="dropdown" value={symbol} onChange={this.handleChange}>
        {symbols.map(symbol => (
          <option key={symbol} value={symbol}>
            {symbol.slice(1).toLowerCase()}
          </option>
        ))}
      </select>
    );
  }
}

export default connect(
  state => ({ symbols: state.data.symbols, symbol: state.ui.symbol }),
  {
    getSymbols,
    setSelectedSymbol,
  },
)(SymbolDropdown);
