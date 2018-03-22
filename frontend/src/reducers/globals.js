import * as constants from 'constants/globals';

const initialState = {
  isModalOpen: true
}

const globals = (state = initialState, action) => {
  switch (action.type) {
    case constants.OPEN_MODAL: {

      return {
        ...state,
        isModalOpen: !state.isModalOpen
      }
    }
    default:
      return state;
  }
}

export default globals
