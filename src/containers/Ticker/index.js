import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSymbols } from '../../ducks/data/symbols';

import TickerTable from '../../components/TickerTable';
import TickerRow from '../../components/TickerRow';

class Ticker extends Component {
  async componentDidMount() {
    try {
      await this.props.getSymbols();
    } catch (ex) {
      console.error(ex);
    }
  }

  render() {
    const { symbols } = this.props;

    return (
      <TickerTable>
        {symbols.map(symbol => (
          <TickerRow
            key={symbol}
            symbol={symbol}
            last={Math.random() * 600}
            changePercent={Math.random() * 3}
            volume={Math.random() * 100000}
          />
        ))}
      </TickerTable>
    );
  }
}

export default connect(state => ({ symbols: state.data.symbols }), {
  getSymbols,
})(Ticker);
