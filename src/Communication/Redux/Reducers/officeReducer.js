import { GET_OFFICE_DATA } from "../Actions/types";

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_OFFICE_DATA:
      console.log("Token reducer for Office");
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
