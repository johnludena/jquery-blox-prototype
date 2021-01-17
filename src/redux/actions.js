// Actions variables
export const CODE_UPDATED = "CODE_UPDATED";
export const LESSON_SUBMITTED = "LESSON_SUBMITTED";
export const LESSON_PASSED = "LESSON_PASSED"; // TODO: Re-name this to something better
export const LESSON_COMPLETED = "LESSON_COMPLETED";
export const TOGGLE_SUBSCRIBE_MODAL = "TOGGLE_SUBSCRIBE_MODAL";
export const TOGGLE_FEEDBACK_MODAL = "TOGGLE_FEEDBACK_MODAL";
// ================================================================

// Lessons Actions
export const codeUpdated = (codeType, content, lessonIndex,) => ({
  type: CODE_UPDATED,
  payload: {
    codeType,
    content,
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

export const lessonPassed = (lessonPassedStatus, lessonIndex) => ({
  type: LESSON_PASSED,
  payload: {
    lessonPassedStatus,
    lessonIndex
  }
});


export const lessonCompleted = (lessonCompletedStatus, lessonIndex) => ({
  type: LESSON_COMPLETED,
  payload: {
    lessonCompletedStatus,
    lessonIndex
  }
});

// Modals Actions
export const toggleSubscribeModal = (modalVisibility) => ({
  type: TOGGLE_SUBSCRIBE_MODAL,
  payload: {
    isVisible: modalVisibility,
  }
});

export const toggleFeedbackModal = (modalVisibility) => ({
  type: TOGGLE_FEEDBACK_MODAL,
  payload: {
    isVisible: modalVisibility,
  }
});




