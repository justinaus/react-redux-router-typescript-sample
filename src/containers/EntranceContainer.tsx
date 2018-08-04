import { connect } from 'react-redux';
import { IStoreState } from '../reducers';
import { Dispatch } from 'redux';
import { createCreateAccountAction } from '../actions/userAction';
import Entrance from '../components/Entrance';

export function mapStateToProps( state: IStoreState) {
  return {
    
  };
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    onCreateAccount: ( userName: string ) => {
      dispatch( createCreateAccountAction( userName ) )
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Entrance);