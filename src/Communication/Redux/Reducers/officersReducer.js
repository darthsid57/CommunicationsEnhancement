import { GET_OFFICERS } from "../Actions/types";

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_OFFICERS:
      console.log("Token reducer for Officers");
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
