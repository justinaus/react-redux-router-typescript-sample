import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { RouterPathEnum } from '../enums/RouterPathEnum';
import { Link } from 'react-router-dom';
import { BookState } from '../states/BookState';

interface IProps extends RouteComponentProps<BookList>{
  booksData: BookState[];
  onAddBook: ( bookData: BookState ) => void;
  onAddMultipleBooks: ( booksData: BookState[] ) => void;
}

class BookList extends React.Component<IProps, {}> {
  constructor(props : IProps){
    super(props);

    this.onClickAddBook = this.onClickAddBook.bind(this);
    this.onClickAddMultipleBooks = this.onClickAddMultipleBooks.bind(this);
  }

  render() {
    return(
        <div>
          <h2>book list</h2>
          <button onClick={this.onClickAddBook}>buy a book</button>
          &nbsp;
          <button onClick={this.onClickAddMultipleBooks}>buy 4 books</button>
          <ul>
            { this.makeBookElements() }
          </ul>
        </div> 
    );
  }

  private makeBookElements = () => (
    this.props.booksData.map((bookModel, i) => {
        return (
            <li key={i}>
                <Link to={ RouterPathEnum.BOOK_DETAIL + '/' + bookModel.id }>{ bookModel.title }</Link>
            </li>
        );
    })
  );

  private onClickAddBook():void {
    const nStartId: number = this.props.booksData.length;

    const bookModel: BookState = this.makeRandomBookModel( nStartId );

    this.props.onAddBook( bookModel );
  }

  private onClickAddMultipleBooks(): void {
    const COUNT:number = 4;

    const arrRet: BookState[] = [];

    var bookModel: BookState;

    const nStartId: number = this.props.booksData.length;

    for(var i:number=0; i<COUNT; ++i) {
      bookModel = this.makeRandomBookModel( nStartId + i );

      arrRet.push( bookModel );
    }

    this.props.onAddMultipleBooks( arrRet );
  }

  private makeRandomBookModel( nId: number ): BookState {
    return new BookState( nId, 'book' + nId );
  }
}

export default BookList;
