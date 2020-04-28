import axios from "axios";
import alert from "./alert";

const URL = process.env.REACT_APP_BASE_URL;

const getHeader = () => {
  const header = {
    headers: {},
  };
  const token = localStorage.getItem("token");
  if (token) header.headers.Authorization = "Bearer " + JSON.parse(token);

  return header;
};

export const GET = (endPoint) => {
  return new Promise((resolve) => {
    axios
      .get(URL + endPoint, getHeader())
      .then((response) => resolve(response))
      .catch((error) => alert.error(error.response.data.message));
  });
};

export const POST = (endPoint, payload) => {
  return new Promise((resolve) => {
    axios
      .post(URL + endPoint, payload, getHeader())
      .then((response) => resolve(response))
      .catch((error) => alert.error(error.response.data.message));
  });
};
