export const LESSON_PASSED = "LESSON_PASSED";
export const LESSON_SUBMITTED = "LESSON_SUBMITTED";
export const CODE_UPDATED = "CODE_UPDATED";

export const lessonPassed = content => ({
  type: LESSON_PASSED,
  payload: content
});

export const lessonSubmitted = lessonId => ({
  type: LESSON_SUBMITTED,
  test: 'yo',
});

export const codeUpdated = (codeType, content, lessonIndex,) => ({
  type: CODE_UPDATED,
  payload: {
    codeType,
    content,
    lessonIndex
  }  
});

// export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
