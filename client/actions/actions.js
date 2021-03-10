import * as types from '../constants/actionTypes';

export const authenticate = (isAuthenticated) => ({
  type: types.AUTHENTICATE,
  payload: isAuthenticated,
});

//gets feed posts
export const getPosts = () => (dispatch) => {
  fetch('/posts')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch({ type: types.GET_POSTS, payload: data });
    });
};

export const savePost = (title, body, id) => (dispatch) => {
  const reqBody = {
    title,
    body,
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

// to delete, as we won't be updating Title, it will be replaced with an assigned alias
export const updateTitle = (newTitle) => ({
  type: types.UPDATE_TITLE,
  payload: newTitle,
});

export const updateBody = (newBody) => ({
  type: types.UPDATE_BODY,
  payload: newBody,
});

export const updateActiveThreadID = (newID) => ({
  type: types.UPDATE_ACTIVE_THREAD_ID,
  payload: newID,
});
