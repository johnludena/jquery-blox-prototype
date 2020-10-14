import { ADD_USER } from "./actionTypes";

export const addTodo = content => ({
  type: ADD_USER,
  payload: {
    name: 'David Loop',
    title: 'Lead Web Developer',
    employed: true,
  }
});

// export const toggleTodo = id => ({
//   type: TOGGLE_TODO,
//   payload: { id }
// });

// export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
