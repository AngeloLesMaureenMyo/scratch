//import { types } from "sass";
import * as types from '../constants/actionTypes';

const initialState = {
  user: null,
};

const scratchReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.AUTHENTICATE: {
    // const isAuthenticated = action;
    console.log('action payload==========', action.payload);

    return {
      ...state,
      user: action.payload,
    };
  }

  case types.UPDATE_USER_VOTES: {
    // const isAuthenticated = action;
    console.log('action payload==========', action.payload);
    return {
      ...state,
      user: {
        username: action.payload.username,
        id: action.payload._id,
        votes: action.payload.votes
      },
    };
  }
  


  default: {
    return state;
  }
  }
};

export default scratchReducer;
