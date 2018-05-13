import React, { Component } from 'react';
import { connect } from 'react-redux';

import { subscribeToTrades } from '../../ducks/data/trades';

class Trades extends Component {
  async componentDidMount() {
    try {
      await this.props.subscribeToTrades(this.props.symbol);
    } catch (ex) {
      console.error(ex);
    }
  }

  render() {
    const { symbol, trades } = this.props;

    return (
      <div>
        {symbol}
        <div>{JSON.stringify(trades)}</div>
      </div>
    );
  }
}

export default connect(
  (state, props) => ({ trades: state.data.trades[props.symbol] || {} }),
  {
    subscribeToTrades,
  },
)(Trades);
