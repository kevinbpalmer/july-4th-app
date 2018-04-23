import * as constants from 'constants/contact'
import {RESET_FORM} from 'constants/globals'

export const updateForm = (value, inputName) => ({
  type: constants.UPDATE_CONTACT_FORM_DATA,
  payload: {
    value,
    inputName
  }
})

export const updateErrors = errors => ({
  type: constants.UPDATE_CONTACT_FORM_ERRORS,
  payload: errors
})

export const resetForm = () => ({
  type: RESET_FORM
})
