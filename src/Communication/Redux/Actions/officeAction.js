import { GET_OFFICE_DATA } from "./types";
import Axios from "axios";

export const getOffice = () => (dispatch) => {
  console.log("GET Office");

  Axios.get("https://commform.lta.com.fj/server/office").then((offices) =>
    dispatch({
      type: GET_OFFICE_DATA,
      payload: offices.data,
    })
  );
};
