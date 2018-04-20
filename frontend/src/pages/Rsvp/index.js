import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Validator from 'validatorjs'
import axios from 'axios'

// components
import TextInput from 'components/TextInput'
import SelectInput from 'components/SelectInput'
import Attending from 'components/Attending'

// actions
import {updateForm, updateErrors} from 'actions/rsvp'

// validation rules
import {rulesWithEmail, rulesWithPhone, customMessages} from './rules'

// stylesheet(s)
import './styles.sass'

// SelectInput options array
const preferredCommOptions = [
  <option key={0} value=''>Select One</option>,
  <option key={1} value='phone'>Phone</option>,
  <option key={2} value='email'>Email</option>
]

class Rsvp extends Component {
  state = {
    loading: false,
    success: false,
    error: false,
    errorMessage: undefined
  }

  handleSubmit = e => {
    e.preventDefault()
    const {
      firstName,
      lastName,
      address,
      preferredComm,
      email,
      phone,
      attendingLunch,
      lunchNumAdults,
      lunchNumKids,
      attendingPotluck,
      potluckNumAdults,
      potluckNumKids,
      updateErrors
    } = this.props

    const data = {
      firstName,
      lastName,
      address,
      preferredComm,
      email,
      phone,
      attendingLunch,
      lunchNumAdults,
      lunchNumKids,
      attendingPotluck,
      potluckNumAdults,
      potluckNumKids
    }

    let validation = new Validator(data, preferredComm === 'email' ? rulesWithEmail : rulesWithPhone, customMessages)
    if (validation.fails()) {
      window.scrollTo(0, 0)
      return updateErrors(validation.errors.errors)
    }
    else {
      window.scrollTo(0, 0)
      updateErrors(validation.errors.errors)
      axios.post('/api/v1/rsvp', data)
      .then(res => {
        console.log('RSVPD SUCCESSFULLY! ', res)
      })
      .catch(err => {
        console.error('RSVP FAIL! ', err)
      })
    }
  }

  render() {
    const {
      firstName,
      lastName,
      address,
      preferredComm,
      email,
      phone,
      attendingLunch,
      lunchNumAdults,
      lunchNumKids,
      attendingPotluck,
      potluckNumAdults,
      potluckNumKids,
      updateForm,
      errors
    } = this.props

    return (
      <div className='form-container container'>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group row'>
            <div className='col-12 form-row'>
              <TextInput
                inputName='firstName'
                value={firstName}
                placeholder='First Name'
                updateForm={updateForm}
                errors={errors}
              />
            </div>
            <div className='col-12 form-row'>
              <TextInput
                inputName='lastName'
                value={lastName}
                placeholder='Last Name'
                updateForm={updateForm}
                errors={errors}
              />
            </div>
            <div className='col-12 form-row'>
              <TextInput
                inputName='address'
                value={address}
                placeholder='Address'
                updateForm={updateForm}
                errors={errors}
              />
            </div>
            <div className='col-12 form-row'>
              <SelectInput
                inputName='preferredComm'
                value={preferredComm}
                updateForm={updateForm}
                options={preferredCommOptions}
                errors={errors}
              />
            </div>
            {preferredComm === 'email' &&
            <div className='col-12 form-row'>
              <TextInput
                inputName='email'
                value={email}
                placeholder='Email Address'
                updateForm={updateForm}
                errors={errors}
              />
            </div>}
            {preferredComm === 'phone' &&
            <div className='col-12 form-row'>
              <TextInput
                inputName='phone'
                value={phone}
                placeholder='Phone Number'
                updateForm={updateForm}
                errors={errors}
              />
            </div>}
            <div className='col-12 form-row'>
              <Attending
                inputName='attendingLunch'
                value={attendingLunch}
                updateForm={updateForm}
                label='Attending Lunch?'
              />
            </div>
            {attendingLunch === true &&
              <div className='col-12 form-row'>
                <TextInput
                  inputName='lunchNumAdults'
                  value={lunchNumAdults}
                  placeholder='Number of Adults for Lunch'
                  updateForm={updateForm}
                  number={true}
                  errors={errors}
                />
              </div>}
            {attendingLunch === true &&
              <div className='col-12 form-row'>
                <TextInput
                  inputName='lunchNumKids'
                  value={lunchNumKids}
                  placeholder='Number of Kids for Lunch'
                  updateForm={updateForm}
                  number={true}
                  errors={errors}
                />
              </div>}
              <div className='col-12 form-row'>
            <Attending
              inputName='attendingPotluck'
              value={attendingPotluck}
              updateForm={updateForm}
              label='Attending Potluck?'
            />
          </div>
          {attendingPotluck === true &&
            <div className='col-12 form-row'>
              <TextInput
                inputName='potluckNumAdults'
                value={potluckNumAdults}
                placeholder='Number of Adults for Potluck'
                updateForm={updateForm}
                number={true}
                errors={errors}
              />
            </div>}
          {attendingPotluck === true &&
            <div className='col-12 form-row'>
              <TextInput
                inputName='potluckNumKids'
                value={potluckNumKids}
                placeholder='Number of Kids for Potluck'
                updateForm={updateForm}
                number={true}
                errors={errors}
              />
            </div>}
          </div>
          <div className='form-group row'>
            <div className='col-12 btn-row'>
              <button className='btn btn-default btn-form' type='submit'>Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

Rsvp.propTypes = {
  // proptypes go here
}

const mapStateToProps = store => ({
  firstName: store.rsvp.firstName,
  lastName: store.rsvp.lastName,
  address: store.rsvp.address,
  preferredComm: store.rsvp.preferredComm,
  email: store.rsvp.email,
  phone: store.rsvp.phone,
  attendingLunch: store.rsvp.attendingLunch,
  lunchNumAdults: store.rsvp.lunchNumAdults,
  lunchNumKids: store.rsvp.lunchNumKids,
  attendingPotluck: store.rsvp.attendingPotluck,
  potluckNumAdults: store.rsvp.potluckNumAdults,
  potluckNumKids: store.rsvp.potluckNumKids,
  errors: store.rsvp.errors
})

const mapDispatchToProps = {
  updateForm,
  updateErrors
}

export default connect(mapStateToProps, mapDispatchToProps)(Rsvp)
