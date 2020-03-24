import { GET_COMMUNICATIONTYPE_DATA } from "../Actions/types";

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COMMUNICATIONTYPE_DATA:
      console.log("REducer for Communcation Type");
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
