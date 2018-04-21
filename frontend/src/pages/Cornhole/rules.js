let rulesWithout = {
  firstName: 'required',
  lastName: 'required',
  partner: 'required',
  phoneNumber: 'required',
  boards: 'numeric'
}

let rulesWithPartner = {
  firstName: 'required',
  lastName: 'required',
  partner: 'required',
  partnerFirstName: 'required',
  partnerLastName: 'required',
  phoneNumber: 'required',
  boards: 'numeric'
}

let customMessages = {
  required: 'This field is required',
  numeric: 'Must be a number'
}

export {rulesWithout, rulesWithPartner, customMessages}
