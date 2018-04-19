import * as constants from 'constants/potluck'

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
