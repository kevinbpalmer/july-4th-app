import { combineReducers } from 'redux'

import rsvp from './rsvp'
import cornhole from './cornhole'

export default combineReducers({
  rsvp,
  cornhole
});
