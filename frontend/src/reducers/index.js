import { combineReducers } from 'redux'

import rsvp from './rsvp'
import donate from './donate'

export default combineReducers({
  rsvp,
  donate
});
