import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes.jsx';
import configureStore from './stores/configureStore';


const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

function Root() {
  return (
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  );
}

ReactDOM.render(<Root />, document.querySelector('#root'));
