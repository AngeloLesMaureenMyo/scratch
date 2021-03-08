import * as types from '../constants/actionTypes';

const initialState = {
  posts: [],
  newPostTitle: '',
  newPostBody: '',
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POSTS: {
      return { ...state, posts: action.payload };
      //   return { ...state, posts: [{ title: 'hello', body: 'i am a post' }] };
    }
    case types.UPDATE_TITLE: {
      return { ...state, newPostTitle: action.payload };
    }
    case types.UPDATE_BODY: {
      return { ...state, newPostBody: action.payload };
    }
    case types.SAVE_POST: {
      const newPostList = [action.payload, ...state.posts];
      return { ...state, posts: newPostList };
    }
    default: {
      return state;
    }
  }
};

export default postsReducer;
