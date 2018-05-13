import React, { Component } from 'react';

import TickerTable from '../../components/TickerTable';
import TickerRow from '../../components/TickerRow';

class Ticker extends Component {
  state = { symbols: [] };

  async componentDidMount() {
    try {
      const res = await fetch('/symbols');
      this.setState({ symbols: await res.json() });
    } catch (ex) {
      console.error(ex);
    }
  }

  render() {
    const { symbols } = this.state;

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

export default Ticker;
