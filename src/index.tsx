import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IStoreState, rootReducer } from './reducers';
import { Store, createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';

const store: Store<IStoreState> = createStore(
  rootReducer, 
  applyMiddleware( logger )
);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
