export const ADD_NEWUSER = "ADD_NEWUSER";
export const GET_USER = "GET_USER";

export function getNewUser() {
  return { type: GET_USER };
}

export function addNewUser(value) {
  return { type: ADD_NEWUSER, payload: value };
}
