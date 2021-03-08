import * as types from '../constants/actionTypes';

export const authenticate = (isAuthenticated) => ({
  type: types.AUTHENTICATE,
  payload: isAuthenticated,
});

// export const getPosts = () => (dispatch) => {
//   console.log('in getPosts action');

//   return dispatch({
//     type: types.GET_POSTS,
//     payload: [{ title: 'hi', body: 'hello' }],
//   });
// };

export const getPosts = () => (dispatch) => {
  console.log('in getPosts action');
  fetch('/posts')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch({ type: types.GET_POSTS, payload: data });
    });
};
