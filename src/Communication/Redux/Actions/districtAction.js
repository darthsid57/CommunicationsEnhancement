import { GET_DISTRICT_DATA } from "./types";
import Axios from "axios";

export const getDristrict = () => (dispatch) => {
  console.log("Get District");

  Axios.get("http://localhost:2567/server/district").then((districts) =>
    dispatch({
      type: GET_DISTRICT_DATA,
      payload: districts.data,
    })
  );
};
