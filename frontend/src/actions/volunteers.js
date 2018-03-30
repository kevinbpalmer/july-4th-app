import * as constants from 'constants/volunteers'

export const updateForm = (value, inputName) => ({
  type: constants.UPDATE_VOLUNTEERS_FORM_DATA,
  payload: {
    value,
    inputName
  }
})

export const updateErrors = errors => ({
  type: constants.UPDATE_VOLUNTEERS_FORM_ERRORS,
  payload: errors
})
