import * as types from '../constants/actionTypes';
const initialState = {
  id: 0,
  uid: 0,
  title: '',
  body: '',
};
const marketsReducer = (state = initialState, action) => {
  let commentList;
  switch (action.type) {
    // case types.ADD_NEW_COMMENT: {
    // }
    default: {
      console.log('initial state mounted!');
      return state;
    }
  }
};

export default marketsReducer;
