import { connect } from 'react-redux';
import { IStoreState } from '../reducers';
import { Dispatch } from 'redux';
import App from '../App';

export function mapStateToProps( state: IStoreState) {
  return {
    isLoggedIn: state.userState.isLoggedIn,
    booksData: state.bookState
  };
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);