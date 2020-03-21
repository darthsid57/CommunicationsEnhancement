import { GET_DISTRICT_DATA } from "./types";
import Axios from "axios";

export const getDristrict = () => dispatch => {
  console.log("Get District");

  Axios.get("/server/district").then(districts =>
    dispatch({
      type: GET_DISTRICT_DATA,
      payload: districts.data
    })
  );
};
