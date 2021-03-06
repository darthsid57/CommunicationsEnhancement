import { GET_DISTRICT_DATA } from "../Actions/types";

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DISTRICT_DATA:
      console.log("Reducer for Districts");
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
