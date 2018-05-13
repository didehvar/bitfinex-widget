import React, { Component } from 'react';
import { connect } from 'react-redux';

import { subscribeToTicker } from '../../ducks/data/tickers';

import TickerTable from '../../components/TickerTable';
import TickerRow from '../../components/TickerRow';

class Ticker extends Component {
  async componentDidMount() {
    try {
      await this.props.subscribeToTicker(this.props.symbol);
    } catch (ex) {
      console.error(ex);
    }
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.symbol !== this.props.symbol) {
      try {
        await this.props.subscribeToTicker(this.props.symbol);
      } catch (ex) {
        console.error(ex);
      }
    }
  }

  render() {
    const { ticker, symbol } = this.props;

    if (!ticker) return <div>Loading</div>;

    return (
      <TickerTable>
        <TickerRow
          key={symbol}
          symbol={symbol}
          last={ticker.last}
          changePercent={ticker.dailyChangePercent}
          volume={ticker.dailyChange}
        />
      </TickerTable>
    );
  }
}

export default connect(
  state => ({
    symbol: state.ui.symbol,
    ticker: state.data.tickers[state.ui.symbol],
  }),
  { subscribeToTicker },
)(Ticker);
