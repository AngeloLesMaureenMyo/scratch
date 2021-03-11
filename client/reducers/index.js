// import all reducers here
import scratchReducer from './scratchReducer.js';
import postsReducer from './postsReducer';
import threadsReducer from './threadsReducer.js';
import { combineReducers } from 'redux';
// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  scratch: scratchReducer,
  posts: postsReducer,
  threads: threadsReducer
});

export default reducers;
