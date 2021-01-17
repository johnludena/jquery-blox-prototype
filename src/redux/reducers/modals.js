import { TOGGLE_SUBSCRIBE_MODAL, TOGGLE_FEEDBACK_MODAL  } from "../actions";

const initialState = {
  isModalSubscribeVisible: false,
  isModalFeedbackVisible: false,
};

export default function(state = initialState, action) {
  switch (action.type) {

    // Trigger state update of user's JS code
    case TOGGLE_SUBSCRIBE_MODAL: {

      const { isVisible } = action.payload; 
      let newState = {...state, isModalSubscribeVisible: isVisible};

      return newState;
    }

    // Trigger state update of user's JS code
    case TOGGLE_FEEDBACK_MODAL: {

      const { isVisible } = action.payload; 
      let newState = {...state, isModalFeedbackVisible: isVisible};

      return newState;
    }

    // Return state as-is if no match
    default:
      return state;
  }
}
