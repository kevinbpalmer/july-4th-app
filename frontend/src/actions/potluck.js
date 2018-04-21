import * as constants from 'constants/potluck'
import {RESET_FORM} from 'constants/globals'

export const updateForm = (value, inputName) => ({
  type: constants.UPDATE_POTLUCK_FORM_DATA,
  payload: {
    value,
    inputName
  }
})

export const updateErrors = errors => ({
  type: constants.UPDATE_POTLUCK_FORM_ERRORS,
  payload: errors
})

export const updatePotluckDishes = dishes => ({
  type: constants.UPDATE_POTLUCK_DISHES,
  payload: dishes
})

export const resetForm = () => ({
  type: RESET_FORM
})
