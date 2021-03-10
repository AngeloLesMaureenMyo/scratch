import * as types from '../constants/actionTypes';

export const authenticate = (isAuthenticated) => ({
  type: types.AUTHENTICATE,
  payload: isAuthenticated,
});

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

export const updateTitle = (newTitle) => ({
  type: types.UPDATE_TITLE,
  payload: newTitle,
});

export const updateBody = (newBody) => ({
  type: types.UPDATE_BODY,
  payload: newBody,
});

export const upVote = (votes, postId, userId) => (dispatch) => {
  //post request to backend
  console.log('upvote fired', votes, postId, userId)
  const reqBody = {
    votes: votes + 1,
    postId: postId,
    userId: userId
  };
  //endpoint TBD
  fetch('/upvote', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/JSON' },
    body: JSON.stringify(reqBody),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch({ type: types.UPVOTE, payload: data });
    })
    .catch((e) => console.log(e));
};
  //body of post request to include id of current post and id of post creator
export const downVote = (votes, postId, userId) => (dispatch) => {
  //post request to backend
  console.log('downvote fired', votes, postId, userId)
  const reqBody = {
    votes: votes + 1,
    postId: postId,
    userId: userId
  };
  //endpoint TBD
  fetch('/downvote', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/JSON' },
    body: JSON.stringify(reqBody),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch({ type: types.UPVOTE, payload: data });
    })
    .catch((e) => console.log(e));
};
  //body of post request to include id of current post and id of post creator  
