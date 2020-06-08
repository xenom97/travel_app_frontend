import { GET, POST_FORM, DELETE, UPDATE_FORM } from "../../helper/api";
import alert from "../../helper/alert";
import {
  SET_DESTINATIONS,
  DELETE_DESTINATION,
  SET_SELECTED_DESTINATION,
} from "./actionTypes";

export const getDestinations = () => {
  return async (dispatch) => {
    const response = await GET("/destinations");
    if (response.success) {
      dispatch({ type: SET_DESTINATIONS, value: response.result });
    } else {
      alert.error(response.message);
    }
  };
};

export const saveDestination = (data) => {
  return async (dispatch) => {
    alert.loading();
    const response = await POST_FORM("/destinations/create", data);
    if (response.success) {
      alert.success();
      return true;
    } else {
      alert.error(response.message);
      return false;
    }
  };
};

export const deleteDestination = (destination) => {
  return async (dispatch) => {
    alert.loading();
    const response = await DELETE("/destinations/delete/" + destination.id, {
      names: destination.name,
    });
    if (response.success) {
      alert.success();
      dispatch({ type: DELETE_DESTINATION, value: destination.id });
    } else {
      alert.error(response.message);
    }
  };
};

export const setSelectedDestination = (selectedDestination) => {
  return { type: SET_SELECTED_DESTINATION, value: selectedDestination };
};

export const editDestination = (data, id) => {
  return async (dispatch) => {
    alert.loading();
    const response = await UPDATE_FORM("/destinations/update/" + id, data);
    if (response.success) {
      alert.success();
      return true;
    } else {
      alert.error(response.message);
      return false;
    }
  };
};

export const updateImageDestination = (data, id) => {
  return async (dispatch) => {
    alert.loading();
    const response = await POST_FORM("/destinations/images/" + id, data);
    return response.success;
  };
};
