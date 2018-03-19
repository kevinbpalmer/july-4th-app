import * as constants from 'constants/rsvp';

const initialState = {
  firstName: '',
  lastName: '',
  address: '',
  preferredComm: '',
  email: '',
  phone: '',
  attendingLunch: false,
  lunchNumAdults: '',
  lunchNumKids: '',
  attendingPotluck: false,
  potluckNumAdults: '',
  potluckNumKids: '',
  errors: undefined
}

const rsvp = (state = initialState, action) => {
  switch (action.type) {
    case constants.UPDATE_RSVP_FORM_DATA: {

      return {
        ...state,
        [action.payload.inputName]: action.payload.value
      }
    }
    case constants.UPDATE_RSVP_FORM_ERRORS: {

      return {
        ...state,
        errors: action.payload
      }
    }
    default:
      return state;
  }
}

export default rsvp
