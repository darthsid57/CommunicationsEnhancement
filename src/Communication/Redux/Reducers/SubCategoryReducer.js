import { GET_SUBCATEGORY_DATA } from "../Actions/types";

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SUBCATEGORY_DATA:
      console.log("Reducer for SubCategory");
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
