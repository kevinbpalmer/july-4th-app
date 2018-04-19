import { combineReducers } from 'redux'

import rsvp from './rsvp'
import donate from './donate'
import potluck from './potluck'

export default combineReducers({
  donate,
  potluck,
  rsvp
});
