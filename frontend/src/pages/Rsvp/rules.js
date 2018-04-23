let rules = {
  firstName: 'required|max:30',
  lastName: 'required|max:30',
  address: 'required|max:150',
  phone: 'required|max:10|min:10',
  email: 'required|email',
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

export {rules, customMessages}
