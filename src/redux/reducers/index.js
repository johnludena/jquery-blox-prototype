import { combineReducers } from "redux";
import lessonsReducer from "./lessons";
import modalsReducer from "./modals";

export default combineReducers({ lessonsReducer, modalsReducer });
