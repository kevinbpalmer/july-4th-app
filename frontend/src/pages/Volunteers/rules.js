let rules = {
  firstName: 'required|max:30',
  lastName: 'required|max:30',
  phone: 'required|max:10|min:10',
  volunteerType: 'required'
}

let customMessages = {
  required: 'This field is required',
  numeric: 'Must be a number'
}

export {rules, customMessages}
