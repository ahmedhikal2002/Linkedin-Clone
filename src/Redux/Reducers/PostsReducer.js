import { CREATE_POST, SET_LOADING } from "../Actions/Actions";

const intialState = {
  load: false,
  post: [],
};

export const PostReducer = (state = intialState, action) => {
  switch (action.type) {
    default:
      return state;

    case CREATE_POST:
      return {
        ...state,
        post: action.payload,
      };

    case SET_LOADING:
      return {
        ...state,
        load: action.payload,
      };
  }
};
