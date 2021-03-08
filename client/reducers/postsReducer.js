import * as types from '../constants/actionTypes';

const initialState = {
  posts: [],
};

const postsReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case types.GET_POSTS: {
      return { ...state, posts: action.payload };
      //   return { ...state, posts: [{ title: 'hello', body: 'i am a post' }] };
    }
    default: {
      return state;
    }
  }
};

export default postsReducer;
