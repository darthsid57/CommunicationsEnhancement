import { GET_OFFICERS } from "./types";
import Axios from "axios";

export const getOfficers = () => (dispatch) => {
  console.log("GET_OFFICERS");

  Axios.get("https://commform.lta.com.fj/server/officers").then((officers) =>
    dispatch({
      type: GET_OFFICERS,
      payload: officers.data,
    })
  );
};
