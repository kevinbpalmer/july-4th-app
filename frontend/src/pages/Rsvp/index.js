import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

// components
import TextInput from 'components/TextInput'
import SelectInput from 'components/SelectInput'
import Attending from 'components/Attending'

// actions
import {updateForm} from 'actions/rsvp'

// stylesheet(s)
import './styles.sass'

// SelectInput options array
const preferredCommOptions = [
  <option key={0} value=''>Select One</option>,
  <option key={1} value='phone'>Phone</option>,
  <option key={2} value='email'>Email</option>
]

class Rsvp extends Component {
  handleSubmit = e => {
    e.preventDefault()
    console.log('Submit')
  }

  handleChange = (inputName, value) => {
    console.log('SELECT INPUT: ', inputName, value)
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
      updateForm} = this.props

    return (
      <div className='rsvp-form-container container'>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group row'>
            <div className='col-12 form-row'>
              <TextInput
                inputName='firstName'
                value={firstName}
                placeholder='First Name'
                updateForm={updateForm}
              />
            </div>
            <div className='col-12 form-row'>
              <TextInput
                inputName='lastName'
                value={lastName}
                placeholder='Last Name'
                updateForm={updateForm}
              />
            </div>
            <div className='col-12 form-row'>
              <TextInput
                inputName='address'
                value={address}
                placeholder='Address'
                updateForm={updateForm}
              />
            </div>
            <div className='col-12 form-row'>
              <SelectInput
                inputName='preferredComm'
                value={preferredComm}
                updateForm={updateForm}
                options={preferredCommOptions}
              />
            </div>
            {preferredComm === 'email' &&
            <div className='col-12 form-row'>
              <TextInput
                inputName='email'
                value={email}
                placeholder='Email Address'
                updateForm={updateForm}
              />
            </div>}
            {preferredComm === 'phone' &&
            <div className='col-12 form-row'>
              <TextInput
                inputName='phone'
                value={phone}
                placeholder='Phone Number'
                updateForm={updateForm}
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
  potluckNumKids: store.rsvp.potluckNumKids
})

const mapDispatchToProps = {
  updateForm
}

export default connect(mapStateToProps, mapDispatchToProps)(Rsvp)
