import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import postsReducer from "../reducers/postsReducer"

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    postsReducer
  });
