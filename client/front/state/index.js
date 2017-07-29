import { combineReducers } from 'redux';

import app from 'front/state/app/reducers';
import { reducer as router } from 'front/routes';


const reducer = combineReducers({
  app,
  router,
});

export default reducer;
