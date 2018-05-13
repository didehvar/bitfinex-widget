import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSymbols } from '../../ducks/data/symbols';
import { getTickers } from '../../ducks/data/tickers';

import TickerTable from '../../components/TickerTable';
import TickerRow from '../../components/TickerRow';

class Ticker extends Component {
  async componentDidMount() {
    try {
      const symbols = await this.props.getSymbols();
      await this.props.getTickers(symbols);
    } catch (ex) {
      console.error(ex);
    }
  }

  render() {
    const { ticker } = this.props;

    if (!ticker) return <div>Loading</div>;

    return (
      <TickerTable>
        <TickerRow
          key={ticker.symbol}
          symbol={ticker.symbol}
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
    ticker: state.data.tickers.find(
      ticker => ticker.symbol === state.ui.symbol,
    ),
  }),
  {
    getSymbols,
    getTickers,
  },
)(Ticker);
