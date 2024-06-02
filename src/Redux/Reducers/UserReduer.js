import { SET_USER } from "../Actions/Actions";

const intialState = {
  user: null,
};

export const UserReducer = (state = intialState, action) => {
  switch (action.type) {
    default:
      return state;

    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
  }
};
