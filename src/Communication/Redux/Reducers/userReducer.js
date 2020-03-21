import { ADD_NEWUSER, GET_USER } from "../Actions/types";

const initialState = {
  clientNumber: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_NEWUSER:
      console.log("reducer for User", state, action.payload);
      return {
        clientNumber: action.payload
      };
    case GET_USER:
      console.log("Get_USER");
      return {
        ...state,
        clientNumber: action.payload
      };
    default:
      return state;
  }
}
