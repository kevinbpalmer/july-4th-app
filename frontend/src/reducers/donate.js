import * as constants from 'constants/donate';

const initialState = {
  firstName: '',
  lastName: '',
  amount: '',
  errors: {}
}

const donate = (state = initialState, action) => {
  switch (action.type) {
    case constants.UPDATE_DONATE_FORM_DATA: {

      return {
        ...state,
        [action.payload.inputName]: action.payload.value
      }
    }

    case constants.UPDATE_DONATE_FORM_ERRORS: {

      return {
        ...state,
        errors: action.payload
      }
    }
    default:
    return state;
  }
}

export default donate
