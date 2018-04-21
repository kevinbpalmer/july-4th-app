import * as constants from 'constants/cornhole'

export const updateForm = (value, inputName) => ({
  type: constants.UPDATE_CORNHOLE_FORM_DATA,
  payload: {
    value,
    inputName
  }
})

export const updateErrors = errors => ({
  type: constants.UPDATE_CORNHOLE_FORM_ERRORS,
  payload: errors
})
