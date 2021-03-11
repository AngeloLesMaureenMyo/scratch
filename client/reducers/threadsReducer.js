import * as types from '../constants/actionTypes';

const initialState = {
  threads: [],
  newThreadBody: '',
};

const threadsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_THREADS: {
      console.log('Youve just fired getThreads')
      return { ...state, threads: action.payload };
      //   return { ...state, posts: [{ title: 'hello', body: 'i am a post' }] };
    }
    case types.UPDATE_ACTIVE_THREAD_ID: {
      console.log('Youve just fired updateThreads')
      return { ...state, newThreadBody: action.payload };
    }
    case types.SAVE_THREAD: {
      console.log('Youve just fired saveThreads')
      const newThreadList = [action.payload, ...state.posts];
      return { ...state, posts: newThreadList };
    }
    default: {
      return state;
    }
  }
};

export default threadsReducer;
