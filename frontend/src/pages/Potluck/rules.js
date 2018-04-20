let rules = {
  firstName: 'required',
  lastName: 'required',
  phone: 'required|numeric',
  email: 'required|email'
}

let customMessages = {
  required: 'This field is required',
  numeric: 'Must be a number',
  email: 'Must be a valid email'
}

export {rules, customMessages}
