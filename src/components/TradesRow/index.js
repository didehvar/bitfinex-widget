import React from 'react';

const TradesRow = ({ id, mts, amount, price }) => (
  <tr>
    <td>{mts}</td>
    <td>{amount}</td>
    <td>{price}</td>
  </tr>
);

export default TradesRow;
