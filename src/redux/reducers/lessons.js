import lessonsArr from '../../lessons/data'

import { CODE_UPDATED, LESSON_PASSED, LESSON_SUBMITTED, SHOWING_FEEDBACK  } from "../actions";

const initialState = {
  lessons: lessonsArr
};

export default function(state = initialState, action) {
  switch (action.type) {
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
