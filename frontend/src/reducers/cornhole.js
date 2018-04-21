import * as constants from 'constants/cornhole';
import {RESET_FORM} from 'constants/globals'

const initialState = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  teamName: '',
  partner: '',
  partnerFirstName: '',
  partnerLastName: '',
  boards: '',
  errors: undefined
}

const cornhole = (state = initialState, action) => {
  switch (action.type) {
    case constants.UPDATE_CORNHOLE_FORM_DATA: {
      return {
        ...state,
        [action.payload.inputName]: action.payload.value
      }
    }
    case constants.UPDATE_CORNHOLE_FORM_ERRORS: {
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
        phoneNumber: '',
        teamName: '',
        partner: '',
        partnerFirstName: '',
        partnerLastName: '',
        boards: '',
        errors: undefined
      }
    }
    default:
      return state;
  }
}

export default cornhole;
