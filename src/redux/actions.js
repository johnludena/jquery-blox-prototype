export const LESSON_PASSED = "LESSON_PASSED";
export const LESSON_SUBMITTED = "LESSON_SUBMITTED";
export const CODE_UPDATED = "CODE_UPDATED";

export const lessonPassed = (lessonPassedStatus, lessonIndex) => ({
  type: LESSON_PASSED,
  payload: {
    lessonPassedStatus,
    lessonIndex
  }
});

export const lessonSubmitted = (lessonSubmittedStatus, lessonIndex) => ({
  type: LESSON_SUBMITTED,
  payload: {
    lessonSubmittedStatus,
    lessonIndex
  }
});

export const codeUpdated = (codeType, content, lessonIndex,) => ({
  type: CODE_UPDATED,
  payload: {
    codeType,
    content,
    lessonIndex
  }  
});

