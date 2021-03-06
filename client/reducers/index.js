// import all reducers here
import scratchReducer from "./scratchReducer.js";
import { combineReducers } from "redux";
// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  scratch: scratchReducer,
});

export default reducers;
