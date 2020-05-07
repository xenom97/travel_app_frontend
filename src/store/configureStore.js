import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/auth";
import destinationReducer from "./reducers/destination";

const rootReducer = combineReducers({
  auth: authReducer,
  destination: destinationReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default configureStore;
