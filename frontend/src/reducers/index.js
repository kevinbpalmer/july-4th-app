import { combineReducers } from 'redux'

import rsvp from './rsvp'
import cornhole from './cornhole'
import volunteers from './volunteers'

export default combineReducers({
  rsvp,
  cornhole,
  volunteers
});
