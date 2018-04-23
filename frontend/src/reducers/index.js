import { combineReducers } from 'redux'

import rsvp from './rsvp'
import donate from './donate'
import potluck from './potluck'
import cornhole from './cornhole'
import volunteers from './volunteers'
import contact from './contact'

export default combineReducers({
  contact,
  cornhole,
  donate,
  potluck,
  rsvp,
  volunteers
});
