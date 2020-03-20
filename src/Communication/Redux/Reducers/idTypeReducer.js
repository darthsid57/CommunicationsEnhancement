import { GET_IDTYPE_DATA } from "../Actions/types";

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_IDTYPE_DATA:
      console.log("Reducer for IDType");
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
