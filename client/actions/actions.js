import * as types from '../constants/actionTypes';
import socketIOClient from 'socket.io-client';

export const authenticate = (isAuthenticated) => ({
  type: types.AUTHENTICATE,
  payload: isAuthenticated,
});

export const getPosts = () => (dispatch) => {
  fetch('/posts')
    .then((res) => res.json())
    .then((data) => {
      // console.log('DATA MFF: ', data);
      dispatch({ type: types.GET_POSTS, payload: data });
    });
};

export const savePost = (title, body, id, username) => (dispatch) => {
  const reqBody = {
    title,
    body,
    user_id: id,
    username
  };
  console.log('saving post: ', title, body, id, username)
  fetch('/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/JSON' },
    body: JSON.stringify(reqBody),
  })
    .then((res) => res.json())
    .then((data) => {
      //console.log(data);
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

export const updateUser = (newUser) => ({
  type: types.UPDATE_USER,
  payload: newUser,
});

export const upVote = (votes, postId, userId, currentUser) => (dispatch) => {
  console.log('upvote fired', votes, postId, userId, currentUser)

  const reqBody = {
    votes: votes + 1,
    postId: postId,
    userId: userId
  };


  fetch('/posts/upvote', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/JSON' },
    body: JSON.stringify(reqBody),
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log('updatedUser=======================', data);
      if (userId === currentUser) {dispatch({ type: types.UPDATE_USER_VOTES, payload: data.updatedUser })}
      // dispatch({ type: types.UPDATE_USER_VOTES, payload: data.updatedUser })
      dispatch({ type: types.UPVOTE, payload: data.allPosts });

      // const socket = socketIOClient('http://localhost:3000')
      // socket.on('new upvote', (newData) => {

      //   console.log('HEARD THE EVENT EMISSION FOR UPVOTE', newData);
      //   // this.props.upVote();
      //   // console.log('this.props.getPosts(): ', this.props.getPosts())
      //   if (newData.currentUserId === currentUser) {
      //     dispatch({ type: types.UPDATE_ONLY_VOTES, payload: newData })
      //   }
      // })

    })
    .catch((e) => console.log(e));
};
  //body of post request to include id of current post and id of post creator
export const downVote = (votes, postId, userId, currentUser) => (dispatch) => {
  //post request to backend
  console.log('downvote fired', votes, postId, userId, currentUser)
  const reqBody = {
    votes: votes - 1,
    postId: postId,
    userId: userId
  };
  //endpoint TBD
  fetch('/posts/downvote', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/JSON' },
    body: JSON.stringify(reqBody),
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      if (userId === currentUser) {dispatch({ type: types.UPDATE_USER_VOTES, payload: data.updatedUser })}
      
      dispatch({ type: types.DOWNVOTE, payload: data.allPosts });
    })
    .catch((e) => console.log(e));
};


export const bannedUser = (username, id) => (dispatch) => {
  //post request to backend
  console.log('banned mf fired', username, id);
  const reqBody = {
    username,
    user_id: id,
  };

  //endpoint TBD
  fetch('/posts/banned', {
    method: 'DELETE',
    headers: { 'Content-Type': 'Application/JSON' },
    body: JSON.stringify(reqBody),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('DELETE FETCH REQUEST DATA:', data);
      
      // if (userId === currentUser) {dispatch({ type: types.UPDATE_USER_VOTES, payload: data.updatedUser })}
      
      dispatch({ type: types.BANNED, payload: data.allPosts });
    })
    .catch((e) => console.log(e));
};

/*
export const savePost = (title, body, id, username) => (dispatch) => {
  const reqBody = {
    title,
    body,
    user_id: id,
    username
  };

  fetch('/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/JSON' },
    body: JSON.stringify(reqBody),
  })
    .then((res) => res.json())
    .then((data) => {
      //console.log(data);
      dispatch({ type: types.SAVE_POST, payload: data });
    
    })
    .catch((e) => console.log(e));
};
*/