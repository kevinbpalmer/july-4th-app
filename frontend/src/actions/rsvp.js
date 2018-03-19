import * as constants from 'constants/rsvp'

export const updateForm = (value, inputName) => ({
  type: constants.UPDATE_RSVP_FORM_DATA,
  payload: {
    value,
    inputName
  }
})
