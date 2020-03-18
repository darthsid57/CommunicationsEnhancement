import { combineReducers } from "redux";
import regionReducer from "./regionReducer";

const allReducers = combineReducers({
  regions: regionReducer
});

export default allReducers;
