let rules = {
  firstName: 'required|max:30',
  lastName: 'required|max:30',
  phone: 'required|max:10|min:10',
  email: 'required|email',
  message: 'required|max:1500'
}

let customMessages = {
  required: 'This field is required',
  email: 'Must be a valid email address'
}

export {rules, customMessages}
