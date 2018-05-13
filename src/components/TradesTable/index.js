import React from 'react';

const TradesTable = ({ children }) => (
  <table>
    <thead>
      <tr>
        <th>Time</th>
        <th>Price</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>{children}</tbody>
  </table>
);

export default TradesTable;
