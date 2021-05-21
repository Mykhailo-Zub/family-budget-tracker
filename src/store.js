import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import getUsersReducer from "./redux/getUsersReducer";

const store = createStore(
  combineReducers({
    getUsersReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
