// import all reducers here
import marketsReducer from './marketsReducer.js';
import { combineReducers } from 'redux';
// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  posts: marketsReducer,
});

export default reducers;
