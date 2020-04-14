import { GET_OFFICE_DATA } from "./types";
import Axios from "axios";

export const getOffice = () => (dispatch) => {
  console.log("GET Office");

  Axios.get("http://10.2.112.80:2567/server/office").then((offices) =>
    dispatch({
      type: GET_OFFICE_DATA,
      payload: offices.data,
    })
  );
};
