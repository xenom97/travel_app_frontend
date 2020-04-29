import { AUTH_SET_TOKEN } from "./actionTypes";
import { POST } from "../../helper/api";

export const authLogin = (data) => {
  return async (dispatch) => {
    const response = await POST("/admins/login", data);
    if (response.data.success) {
      const token = response.data.result;
      localStorage.setItem("token", JSON.stringify(token));
      dispatch({ type: AUTH_SET_TOKEN, token });
    }
  };
};
