export const ADD_CLIENTNUMBER = "ADD_CLIENTNUMBER";
export const ADD_CLIENTNAME = "ADD_CLIENTNAME";
export const ADD_IDNUMBER = "ADD_IDNUMBER";
export const ADD_PHONECONTACT = "ADD_PHONECONTACT";
export const ADD_EMAILADDRESS = "ADD_EMAILADDRESS";
export const ADD_IDTYPE = "ADD_IDTYPE";
export const ADD_REGION = "ADD_REGION";
export const ADD_OFFICE = "ADD_OFFICE";
export const GET_USER = "GET_USER";

export function getNewUser() {
  return { type: GET_USER };
}

export function addClientNumber(value) {
  return { type: ADD_CLIENTNUMBER, payload: value };
}

export function addClientName(value) {
  return { type: ADD_CLIENTNAME, payload: value };
}

export function addIdNumber(value) {
  return { type: ADD_IDNUMBER, payload: value };
}

export function addPhoneContact(value) {
  return { type: ADD_PHONECONTACT, payload: value };
}

export function addEmailAddress(value) {
  return { type: ADD_EMAILADDRESS, payload: value };
}

export function addIdType(value) {
  return { type: ADD_IDTYPE, payload: value };
}

export function addRegion(value) {
  return { type: ADD_REGION, payload: value };
}

export function addOffice(value) {
  return { type: ADD_OFFICE, payload: value };
}
