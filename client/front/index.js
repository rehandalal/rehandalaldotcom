import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { initializeCurrentLocation } from 'redux-little-router';
import thunk from 'redux-thunk';

import Router, {
  enhancer as routerEnhancer,
  middleware as routerMiddleware,
} from 'front/routes';
import reducers from 'front/state';


const middleware = [
  routerMiddleware,
  thunk,
];

const store = createStore(reducers, reducers(undefined, { type: 'INITIAL' }), compose(
  applyMiddleware(...middleware),
  routerEnhancer,
));

const initialLocation = store.getState().router;
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation));
}

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}


ReactDOM.render(<Root />, document.querySelector('#root'));
