import { combineReducers } from 'redux'

import rsvp from './rsvp'
import globals from './globals'

export default combineReducers({
  rsvp,
  globals
});
