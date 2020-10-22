import lessonsArr from '../../lessons/data'

import { CODE_UPDATED, LESSON_PASSED, LESSON_SUBMITTED  } from "../actions";
// import { ADD_USER, TOGGLE_TODO } from "../actionTypes";

const initialState = {
  lessons: lessonsArr
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LESSON_PASSED: {
      let newState =  {
        ...state,
        lessons: [...state.lessons, action.payload],
      }

      return newState;
    }

    case LESSON_SUBMITTED: {
      let newState =  {
        ...state,
        lessons: [...state.lessons, action.payload],
      }

      return newState;
    }

    case CODE_UPDATED: {
      const { codeType, content, lessonIndex } = action.payload; // destructure payload properties

      let newState =  {
        ...state,

        // map through all lessons and return new array with modified object
        lessons: state.lessons.map((lesson, index)=> {
          if (index === lessonIndex) {
            return {...lesson, [codeType]: content }
          }
          else {
            return lesson;
          }
        })  
      }

      return newState;
    }
    
    default:
      return state;
  }
}
