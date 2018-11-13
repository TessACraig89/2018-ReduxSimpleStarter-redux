import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  rederList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title}  className="list-group-item">(book.title)</li>
      );
    });
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}
// takes application state, array of books and active book, and whatever is returned will show up as props inside bookList
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList);
