import React from 'react';

const TickerTable = ({ children }) => (
  <table>
    <thead>
      <tr>
        <th>Symbol</th>
        <th>Last</th>
        <th>Daily Change %</th>
        <th>Daily Change</th>
      </tr>
    </thead>
    <tbody>{children}</tbody>
  </table>
);

export default TickerTable;
