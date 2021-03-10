import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers/index.js';

// we are adding composeWithDevTools here to get easy access to the Redux dev tools
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
