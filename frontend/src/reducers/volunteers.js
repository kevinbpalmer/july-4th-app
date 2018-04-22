import * as constants from 'constants/volunteers';
import {RESET_FORM} from 'constants/globals'

const initialState = {
  firstName: '',
  lastName: '',
  phone: '',
  volunteerType: '',
  cleanEmail: '',
  errors: undefined
}

const volunteers = (state = initialState, action) => {
  switch (action.type) {
    case constants.UPDATE_VOLUNTEERS_FORM_DATA: {
      return {
        ...state,
        [action.payload.inputName]: action.payload.value
      }
    }
    case constants.UPDATE_VOLUNTEERS_FORM_ERRORS: {
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
        volunteerType: '',
        cleanEmail: '',
        errors: undefined
      }
    }
    default:
      return state;
  }
}

export default volunteers;
