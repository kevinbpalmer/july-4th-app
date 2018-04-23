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
  <option key={4} value='Fireworks'>Firework Committee</option>,
  <option key={5} value='Clean Up'>Clean Up Committee</option>
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
            <div className='form-group row'>
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
