import { createStore } from "redux";
import { postsReducer } from "../reducers/postsReducer";

const store = createStore(
  postsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
