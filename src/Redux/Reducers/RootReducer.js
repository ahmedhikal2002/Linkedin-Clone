import { UserReducer } from "./UserReduer";
import { PostReducer } from "./PostsReducer";
import { combineReducers } from "redux";

export const RootReducer = combineReducers({
  user: UserReducer,
  article: PostReducer,
});
