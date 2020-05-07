import { SET_DESTINATIONS } from "../actions/actionTypes";

const initialState = {
  destinations: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DESTINATIONS:
      return {
        ...state,
        destinations: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
