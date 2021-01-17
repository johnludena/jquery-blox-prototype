import { TOGGLE_SUBSCRIBE_MODAL  } from "../actions";

const initialState = {
  isVisible: false
};

export default function(state = initialState, action) {
  switch (action.type) {

    // Trigger state update of user's JS code
    case TOGGLE_SUBSCRIBE_MODAL: {
      console.log('case: TOGGLE_SUBSCRIBE_MODAL')

      const { isVisible } = action.payload; 
      let newState = {...state, isVisible: isVisible};

      return newState;
    }

    // Return state as-is if no match
    default:
      return state;
  }
}
