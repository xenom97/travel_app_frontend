import { AUTH_SET_TOKEN, AUTH_REMOVE_TOKEN } from "../actions/actionTypes";

const token = localStorage.getItem("token");

const initialState = {
  token,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case AUTH_REMOVE_TOKEN:
      return {
        ...state,
        token: undefined,
      };
    default:
      return state;
  }
};

export default reducer;
