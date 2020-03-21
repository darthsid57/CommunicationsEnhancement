import { combineReducers } from "redux";
import regionReducer from "./regionReducer";
import officeReducer from "./officeReducer";
import districtReducer from "./districtReducer";
import idTypeReducer from "./idTypeReducer";
import userReducer from "./userReducer";

const allReducers = combineReducers({
  Regions: regionReducer,
  Offices: officeReducer,
  Districts: districtReducer,
  IdTypes: idTypeReducer,
  UserDetail: userReducer
});

export default allReducers;
