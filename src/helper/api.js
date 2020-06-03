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
    fetch(URL + endPoint)
      .then((response) => response.json())
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

export const POST = (endPoint, payload) => {
  return new Promise((resolve, reject) => {
    fetch(URL + endPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: getHeader(),
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

export const POST_FORM = (endPoint, payload) => {
  return new Promise((resolve, reject) => {
    fetch(URL + endPoint, {
      method: "POST",
      headers: {
        Authorization: getHeader(),
      },
      body: payload,
    })
      .then((response) => response.json())
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

export const UPDATE_FORM = (endPoint, payload) => {
  return new Promise((resolve, reject) => {
    fetch(URL + endPoint, {
      method: "PUT",
      headers: {
        Authorization: getHeader(),
      },
      body: payload,
    })
      .then((response) => response.json())
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

export const DELETE = (endPoint) => {
  return new Promise((resolve, reject) => {
    fetch(URL + endPoint, {
      method: "DELETE",
      headers: {
        Authorization: getHeader(),
      },
    })
      .then((response) => response.json())
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};
