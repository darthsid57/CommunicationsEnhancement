import { combineReducers } from "redux";
import regionReducer from "./regionReducer";
import officeReducer from "./officeReducer";
import districtReducer from "./districtReducer";
import idTypeReducer from "./idTypeReducer";

const allReducers = combineReducers({
  Regions: regionReducer,
  Offices: officeReducer,
  Districts: districtReducer,
  IdTypes: idTypeReducer
});

export default allReducers;
