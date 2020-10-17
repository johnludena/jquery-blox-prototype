export const LESSON_PASSED = "LESSON_PASSED";
export const LESSON_SUBMITTED = "LESSON_SUBMITTED";

export const lessonPassed = content => ({
  type: LESSON_PASSED,
  payload: content
});

export const lessonSubmitted = lessonId => ({
  type: LESSON_SUBMITTED,
  test: 'yo',
});

// export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
