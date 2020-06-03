import { AUTH_SET_TOKEN, AUTH_REMOVE_TOKEN } from "./actionTypes";
import { POST } from "../../helper/api";
import alert from "../../helper/alert";

export const authLogin = (data) => {
  return async (dispatch) => {
    const response = await POST("/admins/login", data);
    if (response.success) {
      const token = response.result;
      localStorage.setItem("token", JSON.stringify(token));
      dispatch({ type: AUTH_SET_TOKEN, token });
    } else {
      alert.error(response.message);
    }
  };
};

export const authLogout = () => {
  localStorage.removeItem("token");
  return { type: AUTH_REMOVE_TOKEN };
};
