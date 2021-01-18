import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import breedReducer from "../reducer/breedReducer";
const rootReducers = combineReducers({
  breed: breedReducer,
});
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));
export default store;
