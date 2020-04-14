import { GET_REGION_DATA } from "./types";
import { POST_REGION_DATA } from "./types";
import Axios from "axios";

export const getRegion = () => (dispatch) => {
  console.log("GET Regions");

  Axios.get("http://10.2.112.80:2567/server/region").then((regions) =>
    dispatch({
      type: GET_REGION_DATA,
      payload: regions.data,
    })
  );
};

export function addRegion(payload) {
  return { type: "POST_REGION_DATA", payload };
}
