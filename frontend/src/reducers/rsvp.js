import * as constants from 'constants/rsvp';

const initialState = {
  firstName: '',
  lastName: '',
  address: '',
  preferredComm: '',
  attendingLunch: false,
  lunchNumAdults: 0,
  lunchNumKids: 0,
  attendingPotluck: false,
  potluckNumAdults: 0,
  potluckNumKids: 0
};

const rsvp = (state = initialState, action) => {
  switch (action.type) {
    case constants.UPDATE_FORM_DATA: {

      return {
        ...state
      }
    }
    default:
      return state;
  }
};

export default rsvp;
