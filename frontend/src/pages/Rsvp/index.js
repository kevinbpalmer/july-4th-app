import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

// components
import TextInput from 'components/TextInput'

// actions
import {updateForm} from 'actions/rsvp'

// stylesheet(s)
import './styles.sass'

class Rsvp extends Component {
  handleSubmit = e => {
    e.preventDefault()
    console.log('Submit')
  }

  render() {
    const {
      firstName,
      lastName,
      address,
      preferredComm,
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
            <div className='col-md-6 col-12 form-row'>
              <TextInput
                inputName='firstName'
                value={firstName}
                placeholder='First Name'
                updateForm={updateForm}
              />
            </div>
            <div className='col-md-6 col-12 form-row'>
              <TextInput
                inputName='lastName'
                value={lastName}
                placeholder='Last Name'
                updateForm={updateForm}
              />
            </div>
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
