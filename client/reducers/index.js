// import all reducers here
import scratchReducer from './scratchReducer.js';
import postsReducer from './postsReducer';
import { combineReducers } from 'redux';
// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  scratch: scratchReducer,
  posts: postsReducer,
});

export default reducers;
