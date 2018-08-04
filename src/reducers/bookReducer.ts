import { BookActionTypes, BookAction } from '../actions/bookAction';
import { BookState } from '../states/BookState';

/**
 * Reducers specify how the application's state changes in response to actions sent to the store. 
 * Remember that actions only describe what happened, but don't describe how the application's state changes.
 */

const initialState: BookState[] = [];

export function reduceBookState(state: BookState[] = initialState, action: BookAction): BookState[] {
  switch (action.type) {
    case BookActionTypes.ADD_BOOK:
      return state.concat( action.bookData );
    case BookActionTypes.ADD_MULTIPLE_BOOKS:
      return state.concat( action.booksData );
    default:
      return state;
  }
}