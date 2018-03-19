let rulesWithPhone = {
  firstName: 'required',
  lastName: 'required',
  address: 'required',
  preferredComm: 'required',
  phone: 'required',
  attendingLunch: 'required',
  lunchNumAdults: 'numeric',
  lunchNumKids: 'numeric',
  attendingPotluck: 'required',
  potluckNumAdults: 'numeric',
  potluckNumKids: 'numeric'
}

let rulesWithEmail = {
  firstName: 'required',
  lastName: 'required',
  address: 'required',
  preferredComm: 'required',
  email: 'required',
  attendingLunch: 'required',
  lunchNumAdults: 'numeric',
  lunchNumKids: 'numeric',
  attendingPotluck: 'required',
  potluckNumAdults: 'numeric',
  potluckNumKids: 'numeric'
}

let customMessages = {
  required: 'This field is required',
  numeric: 'Must be a number'
}

export {rulesWithPhone, rulesWithEmail, customMessages}
