import { ADD_USER } from "../actionTypes";
// import { ADD_USER, TOGGLE_TODO } from "../actionTypes";

const initialState = {
  users: [
      {
          name: "John Ludena",
          title: "Front-end Developer",
          employed: true,
      },
      {
          name: "Berenise Allen",
          title: "Junior Web Developer",
          employed: false,
      },
      {
          name: "Josh Matos",
          title: "Front-end Engineer",
          employed: true,
      },
      {
          name: "Hannah Lima",
          title: "Junior Software Engineer",
          employed: false,
      }
  ]
};

export default function(state = initialState, action) {
  console.log('users.js > state:', state);
  console.log('action:', action);
  switch (action.type) {
    case ADD_USER: {
      const { name, title, employed } = action.payload;
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    }
    
    default:
      return state;
  }
}
