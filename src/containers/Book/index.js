import React, { Component } from 'react';
import { connect } from 'react-redux';

import { subscribeToBook } from '../../ducks/data/books';

class Book extends Component {
  async componentDidMount() {
    try {
      await this.props.subscribeToBook(this.props.symbol);
    } catch (ex) {
      console.error(ex);
    }
  }

  render() {
    const { symbol, books } = this.props;

    return (
      <div>
        {symbol}
        <div>{JSON.stringify(books)}</div>
      </div>
    );
  }
}

export default connect(
  (state, props) => ({ books: state.data.books[props.symbol] || {} }),
  {
    subscribeToBook,
  },
)(Book);