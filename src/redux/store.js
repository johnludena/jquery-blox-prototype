import { createStore } from "redux";

// The Reducer Function
let userReducer = function (state, action) {
  if (state === undefined) {
    state = [];
  }
  if (action.type === "ADD_USER") {
    state.push(action.user);
  }
  return state;
};

let store = createStore(userReducer);

export default store;