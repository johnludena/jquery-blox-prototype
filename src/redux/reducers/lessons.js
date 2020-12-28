import lessonsArr from '../../lessons/data'

import { CODE_UPDATED, LESSON_PASSED, LESSON_SUBMITTED, LESSON_COMPLETED  } from "../actions";

const initialState = {
  lessons: lessonsArr
};

export default function(state = initialState, action) {
  switch (action.type) {

    // Trigger state update of user's JS code
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

    
    // Mark as lesson submitted
    case LESSON_SUBMITTED: {
      const { lessonSubmittedStatus, lessonIndex } = action.payload; // destructure payload properties

      let newState =  {
        ...state,

        // map through all lessons and return new array with modified object
        lessons: state.lessons.map((lesson, index)=> {
          if (index === lessonIndex) {
            return {...lesson, lessonSubmitted: lessonSubmittedStatus }
          }
          else {
            return lesson;
          }
        })  
      }

      return newState;
    }

    // Mark submission as correct
    case LESSON_PASSED: {
      
      const { lessonPassedStatus, lessonIndex } = action.payload; // destructure payload properties

      let newState =  {
        ...state,

        // map through all lessons and return new array with modified object
        lessons: state.lessons.map((lesson, index)=> {
          if (index === lessonIndex) {
            return {...lesson, lessonPassed: lessonPassedStatus }
          }
          else {
            return lesson;
          }
        })  
      }

      return newState;
    }

    // Mark lesson as complete
    case LESSON_COMPLETED: {
      
      const { lessonCompletedStatus, lessonIndex } = action.payload; // destructure payload properties

      let newState =  {
        ...state,

        // map through all lessons and return new array with modified object
        lessons: state.lessons.map((lesson, index)=> {
          if (index === lessonIndex) {
            return {...lesson, lessonCompleted: lessonCompletedStatus }
          }
          else {
            return lesson;
          }
        })  
      }

      return newState;
    }   
    
    // Return state as-is if no match
    default:
      return state;
  }
}
