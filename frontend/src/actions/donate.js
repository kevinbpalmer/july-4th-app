import * as constants from 'constants/donate'
import {RESET_FORM} from 'constants/globals'

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

export const resetForm = () => ({
  type: RESET_FORM
})

export const updateProgressBar = bool => ({
    type: constants.UPDATE_PROGRESS_BAR,
    payload: bool
})
