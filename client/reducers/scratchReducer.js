//import { types } from "sass";
import * as types from '../constants/actionTypes';

const initialState = {
  user: null,
};

const scratchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTHENTICATE: {
      // const isAuthenticated = action;
      console.log('action.payload: ', action.payload);

      return {
        ...state,
        user: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default scratchReducer;
