import { GET_SUBCATEGORY_DATA } from "../Actions/types";
import Axios from "axios";

export const getSubCategory = () => (dispatch) => {
  console.log("Get Subcategory");

  Axios.get("http://10.2.112.80:2567/server/subcategory").then((subcategory) =>
    dispatch({
      type: GET_SUBCATEGORY_DATA,
      payload: subcategory.data,
    })
  );
};
