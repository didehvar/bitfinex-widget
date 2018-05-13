import React, { Component } from 'react';
import { connect } from 'react-redux';

import { subscribeToBook } from '../../ducks/data/books';

import BookTable from '../../components/BookTable';
import BookRow from '../../components/BookRow';

class Book extends Component {
  async componentDidMount() {
    try {
      await this.props.subscribeToBook(this.props.symbol);
    } catch (ex) {
      console.error(ex);
    }
  }

  render() {
    const { symbol, book } = this.props;

    if (!book.instances) return <div>Loading</div>;

    return [
      <BookTable key="left" symbol={symbol}>
        {book.instances
          .filter(bk => bk.amount > 0)
          .map((bk, i) => <BookRow key={i} {...bk} />)}
      </BookTable>,
      <BookTable key="right" reverse symbol={symbol}>
        {book.instances
          .filter(bk => bk.amount < 0)
          .map((bk, i) => <BookRow key={i} reverse {...bk} />)}
      </BookTable>,
    ];
  }
}

export default connect(
  (state, props) => ({ book: state.data.books[props.symbol] || {} }),
  {
    subscribeToBook,
  },
)(Book);
