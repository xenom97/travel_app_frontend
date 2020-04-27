import axios from "axios";

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
  return new Promise((resolve, reject) => {
    axios
      .get(URL + endPoint, getHeader())
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

export const POST = (endPoint, payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + endPoint, payload, getHeader())
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};
