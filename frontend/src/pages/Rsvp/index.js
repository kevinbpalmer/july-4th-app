import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Validator from 'validatorjs'
import axios from 'axios'
import ReactGA from 'react-ga'

// components
import TextInput from 'components/TextInput'
import SelectInput from 'components/SelectInput'
import Attending from 'components/Attending'
import SuccessBlock from 'components/SuccessBlock'
import ErrorBlock from 'components/ErrorBlock'
import ContactBlurb from 'components/ContactBlurb'

// actions
import {updateForm, updateErrors, resetForm} from 'actions/rsvp'

// validation rules
import {rules, customMessages} from './rules'

// loading spinner
import loadingSpinner from 'styles/loading.svg'

// stylesheet(s)
import './styles.sass'

class Rsvp extends Component {
  state = {
    loading: false,
    success: false,
    error: false,
    errorMessage: undefined
  }

  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }

  handleSubmit = e => {
    e.preventDefault()
    const {
      firstName,
      lastName,
      address,
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
      email,
      phone,
      attendingLunch,
      lunchNumAdults,
      lunchNumKids,
      attendingPotluck,
      potluckNumAdults,
      potluckNumKids
    }

    let validation = new Validator(data, rules, customMessages)
    if (validation.fails()) {
      window.scrollTo(0, 0)
      return updateErrors(validation.errors.errors)
    }
    else {
      window.scrollTo(0, 0)
      updateErrors(validation.errors.errors)

      this.setState({loading: true})

      axios.post('/api/v1/rsvp', data)
      .then(res => {
        process.env.DEBUG && console.log('RSVPD SUCCESSFULLY! ', res)
        this.setState({
          loading: false,
          success: true,
          error: false,
          errorMessage: undefined
        })
      })
      .catch(err => {
        process.env.DEBUG && console.error('RSVP FAIL! ', err)
        this.setState({
          loading: false,
          success: false,
          error: true,
          errorMessage: err
        })
      })
    }
  }

  handleInputChange = (value, name) => {
    const {updateForm} = this.props
    const numOnly = new RegExp('^[0-9]+$')

    if (name === 'phone' && value.length > 0 && (value.length > 10 || numOnly.test(value) === false)) {
      return
    }
    if ((name === 'firstName' || name === 'lastName') && value.length > 30) {
      return
    }
    if (name === 'email' && value.length > 60) {
      return
    }

    updateForm(value, name)
  }

  resetForm = () => {
    const {resetForm} = this.props

    this.setState({
      loading: false,
      success: false,
      error: false,
      errorMessage: undefined
    })
    resetForm()
  }

  render() {
    const {
      firstName,
      lastName,
      address,
      email,
      phone,
      attendingLunch,
      lunchNumAdults,
      lunchNumKids,
      attendingPotluck,
      potluckNumAdults,
      potluckNumKids,
      errors
    } = this.props
    const {loading, success, error} = this.state

    if (loading) {
      return (
        <div className='loading-spinner-wrapper'>
          <img
            src={loadingSpinner}
            alt='spinning loading icon'
          />
        </div>
      )
    }

    if (success) {
      return (
        <SuccessBlock
          resetForm={this.resetForm}
          btnText='RSVP Again?'
        />
      )
    }

    return (
      <div className='form-container container'>
        <h5>Let us know you're ready to party!</h5>
        <ContactBlurb />
        {error && <ErrorBlock />}
        <form onSubmit={this.handleSubmit}>
          <div className='form-group row'>
            <div className='col-12 form-row'>
              <TextInput
                inputName='firstName'
                value={firstName}
                placeholder='First Name'
                updateForm={this.handleInputChange}
                errors={errors}
              />
            </div>
            <div className='col-12 form-row'>
              <TextInput
                inputName='lastName'
                value={lastName}
                placeholder='Last Name'
                updateForm={this.handleInputChange}
                errors={errors}
              />
            </div>
            <div className='col-12 form-row'>
              <TextInput
                inputName='address'
                value={address}
                placeholder='Address'
                updateForm={this.handleInputChange}
                errors={errors}
              />
            </div>
            <div className='col-12 form-row'>
              <TextInput
                inputName='email'
                value={email}
                placeholder='Email Address'
                updateForm={this.handleInputChange}
                errors={errors}
              />
            </div>
            <div className='col-12 form-row'>
              <TextInput
                inputName='phone'
                value={phone}
                placeholder='Phone Number'
                updateForm={this.handleInputChange}
                errors={errors}
              />
            </div>
            <div className='col-12 form-row'>
              <Attending
                inputName='attendingLunch'
                value={attendingLunch}
                updateForm={this.handleInputChange}
                label='Attending Lunch?'
              />
            </div>
            {attendingLunch === true &&
              <div className='col-12 form-row'>
                <TextInput
                  inputName='lunchNumAdults'
                  value={lunchNumAdults}
                  placeholder='Number of Adults for Lunch'
                  updateForm={this.handleInputChange}
                  number={true}
                  errors={errors}
                />
              </div>}
            {attendingLunch === true &&
              <div className='col-12 form-row'>
                <TextInput
                  inputName='lunchNumKids'
                  value={lunchNumKids}
                  placeholder='Number of Kids (under age 10) for Lunch'
                  updateForm={this.handleInputChange}
                  number={true}
                  errors={errors}
                />
              </div>}
              <div className='col-12 form-row'>
            <Attending
              inputName='attendingPotluck'
              value={attendingPotluck}
              updateForm={this.handleInputChange}
              label='Attending Potluck?'
            />
          </div>
          {attendingPotluck === true &&
            <div className='col-12 form-row'>
              <TextInput
                inputName='potluckNumAdults'
                value={potluckNumAdults}
                placeholder='Number of Adults for Potluck'
                updateForm={this.handleInputChange}
                number={true}
                errors={errors}
              />
            </div>}
          {attendingPotluck === true &&
            <div className='col-12 form-row'>
              <TextInput
                inputName='potluckNumKids'
                value={potluckNumKids}
                placeholder='Number of Kids (under age 10) for Potluck'
                updateForm={this.handleInputChange}
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
  address: PropTypes.string,
  attendingLunch: PropTypes.bool,
  attendingPotluck: PropTypes.bool,
  email: PropTypes.string,
  errors: PropTypes.object,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  lunchNumAdults: PropTypes.string,
  lunchNumKids: PropTypes.string,
  phone: PropTypes.string,
  potluckNumAdults: PropTypes.string,
  potluckNumKids: PropTypes.string,
  resetForm: PropTypes.func,
  updateErrors: PropTypes.func,
  updateForm: PropTypes.func
}

const mapStateToProps = store => ({
  firstName: store.rsvp.firstName,
  lastName: store.rsvp.lastName,
  address: store.rsvp.address,
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
  updateErrors,
  resetForm
}

export default connect(mapStateToProps, mapDispatchToProps)(Rsvp)
