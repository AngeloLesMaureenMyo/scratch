import * as types from '../constants/actionTypes';

export const authenticate = (isAuthenticated) => ({
  type: types.AUTHENTICATE,
  payload: isAuthenticated,
});

//gets feed level posts
export const getPosts = () => (dispatch) => {
  fetch('/posts')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch({ type: types.GET_POSTS, payload: data });
    });
};

export const savePost = (alias, body, id) => (dispatch) => {
  const reqBody = {
    alias: alias,
    body: body,
    user_id: id,
  };
  fetch('/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/JSON' },
    body: JSON.stringify(reqBody),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch({ type: types.SAVE_POST, payload: data });
    })
    .catch((e) => console.log(e));
};

export const updateBody = (newBody) => ({
  type: types.UPDATE_BODY,
  payload: newBody,
});

export const updateThread = (newBody) => ({
  type: types.UPDATE_THREAD,
  payload: newBody,
});

export const updateActiveThreadID = (newID) => ({
  type: types.UPDATE_ACTIVE_THREAD_ID,
  payload: newID,
});



export const getThreads = (id) => (dispatch) => {
  console.log('Inside getThreads in actions.js')
  console.log('Fetch id is ', id);
  // const reqBody = {
  //   postId: id
  // }
  fetch(`/posts/threads/${id}`, {
    headers: { 'Content-Type': 'Application/JSON' },
    // body: JSON.stringify(reqBody),
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log('Thread is', data[0].body);
      dispatch({ type: types.GET_THREADS, payload: data });
    });
};


export const saveThread = (alias, body, id, feedPostId) => (dispatch) => {
  const reqBody = {
    alias,
    body,
    user_id: id,
    parent_id: feedPostId
  };
  console.log('Inside the saveThread actions.js file')
  console.log('Req body is', reqBody);
  fetch('/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/JSON' },
    body: JSON.stringify(reqBody),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch({ type: types.SAVE_THREAD, payload: data });
    })
    .catch((e) => console.log(e));
};

export const assignAlias = (alias) => ({
  type: types.ASSIGN_ALIAS,
  payload: alias,
});
