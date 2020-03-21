import { ADD_NEWUSER } from "./types";
import Axios from "axios";

export const addNewUser = (event, { value }) => {
  console.log("Add new User");

  console.log("New User : " + value);

  return {
    type: ADD_NEWUSER,
    payload: value
  };
};
