import React from 'react';

import './style.css';

const BookTable = ({ reverse = false, children }) => (
  <table className="book-table">
    <thead>
      <tr>
        <th>{reverse ? 'Count' : 'Price'}</th>
        <th>Amount</th>
        <th>{reverse ? 'Price' : 'Count'}</th>
      </tr>
    </thead>
    <tbody>{children}</tbody>
  </table>
);

export default BookTable;
