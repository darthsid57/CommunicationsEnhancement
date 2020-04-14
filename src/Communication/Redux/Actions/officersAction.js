import { GET_OFFICERS } from "./types";
import Axios from "axios";

export const getOfficers = () => (dispatch) => {
  console.log("GET_OFFICERS");

  Axios.get("http://10.2.112.80:2567/server/officers").then((officers) =>
    dispatch({
      type: GET_OFFICERS,
      payload: officers.data,
    })
  );
};
