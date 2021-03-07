//import { types } from "sass";
import * as types from '../constants/actionTypes';

const initialState = {
  isAuthenticated: false,
};

const scratchReducer = (state = initialState, action) => {

  switch (action.type) {
    
    case types.AUTHENTICATE: {
      const isAuthenticated = action;

      return {
        ...state,
        isAuthenticated
      }

    }

    default: {
      return state;
    }
  }
};

export default scratchReducer;
