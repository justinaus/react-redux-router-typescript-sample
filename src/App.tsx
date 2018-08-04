import * as React from 'react';
import Hello from './containers/EntranceContainer';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { RouterPathEnum } from './enums/RouterPathEnum';
import BookListContainer from './containers/BookListContainer';
// import BookDetail from './components/BookDetail';

export interface Props {
  isLoggedIn: boolean
}

class App extends React.Component<Props, {}> {
  constructor(props : Props){
    super(props);
  }

  public render() {
    const checkAccount = () => {
      if( !this.props.isLoggedIn ) {
        return (
          <Redirect to={RouterPathEnum.HOME} />
        );
      }
      return ;
    }

    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact={true} path={RouterPathEnum.HOME} component={Hello}/>
            { checkAccount() }
            <Route path={RouterPathEnum.BOOK_LIST} component={BookListContainer}/>
            {/* <Route path={RouterPathEnum.BOOK_DETAIL + '/:id'} component={BookDetail}/> */}
            <Redirect to={RouterPathEnum.HOME} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
