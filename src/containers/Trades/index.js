import React, { Component } from 'react';
import { connect } from 'react-redux';

import { subscribeToTrades } from '../../ducks/data/trades';

import TradesTable from '../../components/TradesTable';
import TradesRow from '../../components/TradesRow';

class Trades extends Component {
  async componentDidMount() {
    try {
      await this.props.subscribeToTrades(this.props.symbol);
    } catch (ex) {
      console.error(ex);
    }
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.symbol !== this.props.symbol) {
      try {
        await this.props.subscribeToTrades(this.props.symbol);
      } catch (ex) {
        console.error(ex);
      }
    }
  }

  render() {
    const { trades } = this.props;

    if (!trades.instances) return <div>Loading</div>;

    return (
      <TradesTable>
        {trades.instances.map((trade, i) => <TradesRow key={i} {...trade} />)}
      </TradesTable>
    );
  }
}

export default connect(
  (state, props) => ({ trades: state.data.trades[props.symbol] || {} }),
  {
    subscribeToTrades,
  },
)(Trades);
