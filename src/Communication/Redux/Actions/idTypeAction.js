import { GET_IDTYPE_DATA } from "./types";
import Axios from "axios";

export const getIdType = () => (dispatch) => {
  console.log("GET IDType");

  Axios.get("https://commform.lta.com.fj/server/idtype").then((idtypes) =>
    dispatch({
      type: GET_IDTYPE_DATA,
      payload: idtypes.data,
    })
  );
};
