import { connect } from 'react-redux';
import { IStoreState } from '../reducers';
import { createAddBookAction, createAddMultipleBooksAction } from '../actions/bookAction';
import { Dispatch } from 'redux';
import BookList from '../components/BookList';
import { BookState } from '../states/BookState';

export function mapStateToProps( state: IStoreState) {
  return {
    booksData: state.bookState
  };
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    onAddBook: ( bookData: BookState ) => {
      dispatch( createAddBookAction( bookData ) )
    },
    onAddMultipleBooks: ( booksData: BookState[] ) => {
      dispatch( createAddMultipleBooksAction( booksData ) )
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);