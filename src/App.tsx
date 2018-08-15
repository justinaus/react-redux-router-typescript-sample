import * as React from 'react';
import EntranceContainer from './containers/EntranceContainer';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { RouterPathEnum } from './enums/RouterPathEnum';
import BookListContainer from './containers/BookListContainer';
import BookDetail from './components/BookDetail';
import { RouteComponentProps } from '../node_modules/@types/react-router';
import { BookState } from './states/BookState';

interface IProps {
  isLoggedIn: boolean,
  booksData: BookState[]
}

class App extends React.Component<IProps, {}> {
  constructor(props : IProps){
    super(props);
  }

  public render() {
    const isLoggedIn: boolean = this.props.isLoggedIn;

    const renderHome = ( props:RouteComponentProps<any> ) => {
      if( isLoggedIn ) {
        return <Redirect to={RouterPathEnum.BOOK_LIST} />;
      }

      return <EntranceContainer {...props} />;
    }

    const renderBookDetail = ( props:RouteComponentProps<any> ) => {
      const nId: number = Number( props.match.params.id );

      return <BookDetail {...props} bookState={ this.props.booksData[ nId ] } />;
    }

    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact={true} path={RouterPathEnum.HOME}
              render={ (props) => renderHome( props ) } />
            { (!isLoggedIn) ? <Redirect to={RouterPathEnum.HOME} /> : '' }
            <Route path={RouterPathEnum.BOOK_LIST} component={BookListContainer}/>
            <Route path={RouterPathEnum.BOOK_DETAIL + '/:id'} 
              render={ (props) => renderBookDetail( props ) }/>
            <Redirect to={RouterPathEnum.HOME} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
