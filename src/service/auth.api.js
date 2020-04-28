import { POST } from "../helper/api";

export const authLogin = async (data) => {
  const response = await POST("/admins/login", data);
  if (response.data.success) {
    const token = response.data.result;
    localStorage.setItem("token", JSON.stringify(token));
  }
};
