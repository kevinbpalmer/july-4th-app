import * as constants from 'constants/donate'

export const updateForm = (value, inputName) => ({
  type: constants.UPDATE_DONATE_FORM_DATA,
  payload: {
    value,
    inputName
  }
})

export const updateErrors = errors => ({
  type: constants.UPDATE_DONATE_FORM_ERRORS,
  payload: errors
})
