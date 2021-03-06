import { GET_REGION_DATA } from "../Actions/types";

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_REGION_DATA:
      console.log("Token Reducer for Region");
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
