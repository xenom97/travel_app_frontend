import { POST, GET } from "../../helper/api";
import alert from "../../helper/alert";
import { SET_DESTINATIONS } from "./actionTypes";

export const getDestinations = () => {
  return async (dispatch) => {
    const response = await GET("/destinations");
    if (response.data.success) {
      dispatch({ type: SET_DESTINATIONS, value: response.data.result });
    } else {
      alert.error(response.data.message);
    }
  };
};

export const saveDestination = (data) => {
  return async (dispatch) => {
    alert.loading();
    const response = await POST("/destinations/create", data);
    if (response.data.success) {
      alert.success();
      return true;
    } else {
      alert.error(response.data.message);
      return false;
    }
  };
};
