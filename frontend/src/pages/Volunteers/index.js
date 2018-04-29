import React, { Component } from 'react'
import {connect} from 'react-redux'
import Validator from 'validatorjs'
import axios from 'axios'

//components
import TextInput from 'components/TextInput'
import SelectInput from 'components/SelectInput'
import LoadingSpinner from 'components/LoadingSpinner'
import SuccessBlock from 'components/SuccessBlock'
import ContactBlurb from 'components/ContactBlurb'
import ErrorBlock from 'components/ErrorBlock'
import SingleDescription from './SingleDescription'

//actions
import {updateForm, updateErrors, resetForm} from 'actions/volunteers'

// rules
import {rules, customMessages} from './rules'

//stylesheet (s)
import './styles.sass'

//SelectInput options array
const volunteerOptions = [
  <option key={0} value=''>Select A Committee</option>,
  <option key={1} value='Name Tag'>Name Tag Committee</option>,
  <option key={2} value='Cornhole'>Cornhole Coordinator</option>,
  <option key={3} value='Potluck'>Potluck Committee</option>,
  <option key={4} value='Fireworks-Friday'>Firework Committee - Friday</option>,
  <option key={5} value='Fireworks-Saturday'>Firework Committee - Saturday</option>,
  <option key={6} value='Clean Up'>Clean Up Committee</option>
]

class Volunteers extends Component {
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
      phone,
      volunteerType,
      updateErrors
    } = this.props

    const data = {
      firstName,
      lastName,
      phone,
      volunteerType
    }

    let validation = new Validator(data, rules, customMessages)
    if (validation.fails()) {
      window.scrollTo(0, 0)
      return updateErrors(validation.errors.errors)
    }
    else {
      this.setState({loading: true})

      axios.post('/api/v1/volunteer', data)
      .then(res => {
        this.setState({
          loading: false,
          success: true,
          error: false,
          errorMessage: undefined
        })
        console.log('Volunteer signup success: ', res)
      })
      .catch(err => {
        this.setState({
          loading: false,
          success: false,
          error: true,
          errorMessage: err
        })
        console.error('Volunteer signup failed: ', err)
      })
    }
  }

  onChange = (value, name) => {
    const {updateForm} = this.props
    const numOnly = new RegExp('^[0-9]+$')

    if (name === 'phone' && value.length > 0 && (value.length > 10 || numOnly.test(value) === false)) {
      return
    }
    if ((name === 'firstName' || name === 'lastName') && value.length > 30) {
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

  renderCommitteeDescription = () => {
    const {volunteerType} = this.props

    if (volunteerType === 'Name Tag') {
      return (
        <div
          style={{
            paddingTop: '.5rem'
          }}>
          <p>Pass out name tags to each guest at event.</p>
        </div>
      )
    }
    if (volunteerType === 'Cornhole') {
      return (
        <div
          style={{
            paddingTop: '.5rem'
          }}>
          <p>Ensure cornole boards are regulation and spaced at regulation, collect prize money from each team/team member, organize and track winner & loser bracket, match up players without a teammate, award prize to 1st & 2nd place.</p>
        </div>
      )
    }
    if (volunteerType === 'Potluck') {
      return (
        <div
          style={{
            paddingTop: '.5rem'
          }}>
          <p>Serve guests cafeteria style to control portions (mainly protein) and for sanitary purposes, organize dishes by course, label food dishes if needed, ensure owner’s name is on dish.</p>
          <p>(Committee members will set aside a plate of food prior to serving guests to eat after serving food)</p>
        </div>
      )
    }
    if (volunteerType === 'Fireworks') {
      return (
        <div
          style={{
            paddingTop: '.5rem'
          }}>
          <p>Friday - prep, fuse, and organize fireworks to prepare for the show the following day. Dinner will be provided.</p>
          <p>Saturday - organize fireworks prior to show, follow instructions from lead person, light fireworks during show, etc.</p>

          <p>Must be 12 years and older to assist and able to follow strict safety instructions.</p>
        </div>
      )
    }
    if (volunteerType === 'Clean Up') {
      return (
        <div
          style={{
            paddingTop: '.5rem'
          }}>
          <p>Clean up morning after event - collect firework debri and event trash, load/haul off trash, stack chairs & tables, etc.</p>
        </div>
      )
    }
  }

  render() {
    const {
      firstName,
      lastName,
      phone,
      volunteerType,
      errors
    } = this.props
    const {
      loading,
      success,
      error
    } = this.state

    if (loading) {
      return (
        <LoadingSpinner />
      )
    }

    if (success) {
      return (
        <SuccessBlock
          resetForm={this.resetForm}
          btnText='Volunteer for another committee?'
        />
      )
    }

    return (
      <div className='volunteers-form-container container'>
        <div className='volunteers-info container'>
          <p>
            To ensure the event runs as smoothly as possible, there will be
            committees put in place this year to help with various tasks
            pertaining to the event. Your help and time are more than
            appreciated!
          </p>
          <ContactBlurb />
          {error && <ErrorBlock />}
        </div>
        <div className='volunteers-committee-description'>
          <SingleDescription
            title='Parade Coordinators'
            text='Ensure everyone is lined up in designated area, advise the grand marshall (fire trucks) about the parade route, kick off the parade at the start line, and ensure the “no parking” zones stay clear by directing parade traffic to designated parking locations.'
            time='10:30 am - 11:30 am'
          />
          <SingleDescription
            title='Name Tag Committee'
            text='Pass out name tags to each guest at event.'
            time='11:45 pm - 12:15 pm'
          />
          <SingleDescription
            title='Cornhole Coordinator'
            text='Ensure cornole boards are regulation and spaced at regulation, collect prize money from each team/team member, organize and track winner & loser bracket, match up players without a teammate, award prize to 1st & 2nd place.'
            time='12:45 pm'
          />
          <SingleDescription
            title='Potluck Committee'
            text='Serve guests cafeteria style to control portions (mainly protein) and for sanitary purposes, organize dishes by course, label food dishes if needed, ensure owner’s name is on dish (Committee members will set aside a plate of food prior to serving guests to eat after serving food).'
            time='5:30 pm - 6:45 pm'
          />
          <SingleDescription
            title='Firework Committee'
            text='Friday - prep, fuse, and organize fireworks to prepare for the show the following day. Dinner will be provided.'
            text2={'Saturday - organize fireworks prior to show, follow instructions from lead person, light fireworks during show, etc. Must be 12 years and older to assist and able to follow strict safety instructions.'}
            time='Friday - 4:00 pm - 7:00 pm'
            time2='Saturday - 8:45 pm - 10:00 pm'
          />
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group row'>
            <div className='col-12 form-row'>
              <TextInput
                inputName='firstName'
                value={firstName}
                placeholder='First Name'
                updateForm={this.onChange}
                errors={errors}
              />
            </div>
            <div className='col-12 form-row'>
              <TextInput
                inputName='lastName'
                value={lastName}
                placeholder='Last Name'
                updateForm={this.onChange}
                errors={errors}
              />
            </div>
            <div className='col-12 form-row'>
              <TextInput
                inputName='phone'
                value={phone}
                placeholder='Phone Number'
                updateForm={this.onChange}
                errors={errors}
              />
            </div>
            <div className='col-12 form-row'>
              <SelectInput
                inputName='volunteerType'
                value={volunteerType}
                options={volunteerOptions}
                updateForm={this.onChange}
                errors={errors}
                onChange={this.onInputChange}
              />
            </div>
            <div className='form-group row btn-group'>
              <div className='col-12 btn-row'>
                <button className='btn btn-default btn-form' type='submit'>Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  firstName: store.volunteers.firstName,
  lastName: store.volunteers.lastName,
  phone: store.volunteers.phone,
  volunteerType: store.volunteers.volunteerType,
  errors: store.volunteers.errors
})

const mapDispatchToProps = {
  updateForm,
  updateErrors,
  resetForm
}

export default connect(mapStateToProps, mapDispatchToProps)(Volunteers)
