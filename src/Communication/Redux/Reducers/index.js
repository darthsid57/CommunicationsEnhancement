import { combineReducers } from "redux";
import regionReducer from "./regionReducer";

const allReducers = combineReducers({
  Regions: regionReducer
});

export default allReducers;
