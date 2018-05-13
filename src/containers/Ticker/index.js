import React from 'react';

import TickerTable from '../../components/TickerTable';
import TickerRow from '../../components/TickerRow';

const Ticker = () => (
  <TickerTable>
    {[...Array(10).keys()].map(i => (
      <TickerRow
        key={i}
        symbol="ETH"
        last={Math.random() * 600}
        changePercent={Math.random() * 3}
        volume={Math.random() * 100000}
      />
    ))}
  </TickerTable>
);

export default Ticker;
