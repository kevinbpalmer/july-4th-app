import * as constants from 'constants/volunteers';

const initialState = {
  volunteer: '',
  nameTagFirstName: '',
  nameTagLastName: '',
  nameTagEmail: '',
  nameTagPhoneNumber: '',
  cornholeFirstName: '',
  cornholeLastName: '',
  cornholePhoneNumber: '',
  potluckFirstName: '',
  potluckLastName: '',
  potluckPhoneNumber: '',
  fireworksFirstName: '',
  fireworksLastName: '',
  fireworksPhoneNumber: '',
  cleanFirstName: '',
  cleanLastName: '',
  cleanPhoneNumber: '',
  cornholeEmail: '',
  potluckEmail: '',
  fireworksEmail: '',
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
    default:
      return state;
  }
}

export default volunteers;
