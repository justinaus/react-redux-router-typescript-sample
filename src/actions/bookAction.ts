import { BookState } from "../states/BookState";

/**
 * Actions are payloads of information that send data from your application to your store.
 */

export enum BookActionTypes {
    ADD_BOOK = 'bookActionAddBook',
    ADD_MULTIPLE_BOOKS = 'bookActionAddMultipleBooks',
}

export interface IAddBookAction {
    type: BookActionTypes.ADD_BOOK;
    bookData: BookState
}
export interface IAddMultipleBooksAction {
    type: BookActionTypes.ADD_MULTIPLE_BOOKS;
    booksData: BookState[]
}

export type BookAction = IAddBookAction | IAddMultipleBooksAction;

// create action.
export function createAddBookAction( bookData: BookState ): IAddBookAction {
    return {
        type: BookActionTypes.ADD_BOOK,
        bookData: bookData
    };
}
export function createAddMultipleBooksAction( booksData: BookState[] ): IAddMultipleBooksAction {
    return {
        type: BookActionTypes.ADD_MULTIPLE_BOOKS,
        booksData: booksData
    };
}

