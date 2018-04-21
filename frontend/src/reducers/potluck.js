import * as constants from 'constants/potluck';
import {RESET_FORM} from 'constants/globals'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  dishes: [],
  errors: {}
}

const potluck = (state = initialState, action) => {
  switch (action.type) {
    case constants.UPDATE_POTLUCK_FORM_DATA: {
      return {
        ...state,
        [action.payload.inputName]: action.payload.value
      }
    }

    case constants.UPDATE_POTLUCK_FORM_ERRORS: {
      return {
        ...state,
        errors: action.payload
      }
    }

    case constants.UPDATE_POTLUCK_DISHES: {
      return {
        ...state,
        dishes: action.payload
      }
    }

    case RESET_FORM: {
      return {
        ...state,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dishes: [],
        errors: {}
      }
    }
    default:
    return state;
  }
}

export default potluck
