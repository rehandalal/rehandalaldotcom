import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import mailingListReducer from './mailingListReducer';
import scrollReducer from './scrollReducer';


const rootReducer = combineReducers({
  mailingList: mailingListReducer,
  routing: routerReducer,
  scroll: scrollReducer,
});

export default rootReducer;
