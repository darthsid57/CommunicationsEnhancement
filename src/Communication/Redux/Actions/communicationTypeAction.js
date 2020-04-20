import { GET_COMMUNICATIONTYPE_DATA } from "./types";
import Axios from "axios";

export const getCommunicationType = () => (dispatch) => {
  console.log("GET Communicat");

  Axios.get("https://commform.lta.com.fj/server/communicationtype").then(
    (communicationtypes) =>
      dispatch({
        type: GET_COMMUNICATIONTYPE_DATA,
        payload: communicationtypes.data,
      })
  );
};
