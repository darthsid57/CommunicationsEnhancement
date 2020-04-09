import { GET_IDTYPE_DATA } from "./types";
import Axios from "axios";

export const getIdType = () => (dispatch) => {
  console.log("GET IDType");

  Axios.get("http://localhost:2567/server/idtype").then((idtypes) =>
    dispatch({
      type: GET_IDTYPE_DATA,
      payload: idtypes.data,
    })
  );
};
