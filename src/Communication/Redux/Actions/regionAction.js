import { GET_REGION_DATA } from "./types";
import Axios from "axios";

export const getRegion = () => dispatch => {
  console.log("GET Regions");

  Axios.get("http://localhost:2567/server/region").then(regions =>
    dispatch({
      type: GET_REGION_DATA,
      payload: regions.data
    })
  );
};
