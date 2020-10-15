import { ADD_USER } from "./actionTypes";

export const addUser = content => ({
  type: ADD_USER,
  payload: content
});

// export const toggleTodo = id => ({
//   type: TOGGLE_TODO,
//   payload: { id }
// });

// export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
