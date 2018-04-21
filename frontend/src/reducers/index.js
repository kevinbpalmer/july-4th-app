import { combineReducers } from 'redux'

import rsvp from './rsvp'
import donate from './donate'
import potluck from './potluck'
import cornhole from './cornhole'
import volunteers from './volunteers'

export default combineReducers({
  cornhole,
  donate,
  potluck,
  rsvp,
  volunteers
});
