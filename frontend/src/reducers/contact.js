import * as constants from 'constants/contact';
import {RESET_FORM} from 'constants/globals'

const initialState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  message: '',
  errors: undefined
}

const contact = (state = initialState, action) => {
  switch (action.type) {
    case constants.UPDATE_CONTACT_FORM_DATA: {
      return {
        ...state,
        [action.payload.inputName]: action.payload.value
      }
    }
    case constants.UPDATE_CONTACT_FORM_ERRORS: {
      return {
        ...state,
        errors: action.payload
      }
    }

    case RESET_FORM: {
      return {
        ...state,
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
        errors: undefined
      }
    }
    default:
      return state
  }
}

export default contact
