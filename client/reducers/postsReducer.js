import * as types from '../constants/actionTypes';

const initialState = {
  posts: [],
  activeThreadID: undefined,
  alias: 'Eager Cute Turtle',
  newPostBody: '',
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POSTS: {
      return { ...state, posts: action.payload };
    }
    case types.UPDATE_BODY: {
      return { ...state, newPostBody: action.payload };
    }
    case types.SAVE_POST: {
      const newPostList = [action.payload, ...state.posts];
      return { ...state, posts: newPostList };
    }
    case types.UPDATE_ACTIVE_THREAD_ID: {
      return { ...state, activeThreadID: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default postsReducer;
