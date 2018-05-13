import React from 'react';

const TradesRow = ({ id, mts, amount, price }) => (
  <tr>
    <td>{mts}</td>
    <td>{price}</td>
    <td>{amount}</td>
  </tr>
);

export default TradesRow;
