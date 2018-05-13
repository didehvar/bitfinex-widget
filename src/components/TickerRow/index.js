import React from 'react';

const TickerRow = ({ symbol, last, changePercent, volume }) => (
  <tr>
    <td>{symbol}</td>
    <td>{last}</td>
    <td>{changePercent}%</td>
    <td>{volume}</td>
  </tr>
);

export default TickerRow;
