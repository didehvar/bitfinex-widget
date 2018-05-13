import React from 'react';

const BookRow = ({ reverse, price, count, amount }) => (
  <tr>
    <td>{reverse ? count : price}</td>
    <td>{amount}</td>
    <td>{reverse ? price : count}</td>
  </tr>
);

export default BookRow;
