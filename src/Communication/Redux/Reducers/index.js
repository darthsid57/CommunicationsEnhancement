import { combineReducers } from "redux";
import regionReducer from "./regionReducer";
import officeReducer from "./officeReducer";
import districtReducer from "./districtReducer";
import idTypeReducer from "./idTypeReducer";
import userReducer from "./userReducer";
import SubCategoryReducer from "./SubCategoryReducer";
import communicationTypeReducer from "./communicationTypeReducer";
import officersReducer from "./officersReducer";

const allReducers = combineReducers({
  Regions: regionReducer,
  Offices: officeReducer,
  Districts: districtReducer,
  IdTypes: idTypeReducer,
  CustomerDetail: userReducer,
  SubCategory: SubCategoryReducer,
  CommunicationType: communicationTypeReducer,
  Officers: officersReducer
});

export default allReducers;
