import {
  SET_DESTINATIONS,
  DELETE_DESTINATION,
  SET_SELECTED_DESTINATION,
} from "../actions/actionTypes";

const initialState = {
  destinations: [],
  selectedDestination: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DESTINATIONS:
      return {
        ...state,
        destinations: action.value,
      };
    case DELETE_DESTINATION:
      return {
        ...state,
        destinations: state.destinations.filter(
          (data) => data.id !== action.value
        ),
      };
    case SET_SELECTED_DESTINATION:
      return {
        ...state,
        selectedDestination: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
