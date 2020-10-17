import lessonsArr from '../../lessons/data'

import { LESSON_PASSED, LESSON_SUBMITTED  } from "../actions";
// import { ADD_USER, TOGGLE_TODO } from "../actionTypes";

const initialState = {
  lessons: lessonsArr
};

console.log('initialState object:', initialState)

export default function(state = initialState, action) {
  switch (action.type) {
    case LESSON_PASSED: {
      // const { name, title, employed } = action.payload;
      let newState =  {
        ...state,
        lessons: [...state.lessons, action.payload],
      }

      return newState;
    }

    case LESSON_SUBMITTED: {
      // const { name, title, employed } = action.payload;
      let newState =  {
        ...state,
        lessons: [...state.lessons, action.payload],
      }

      return newState;
    }
    
    default:
      return state;
  }
}
