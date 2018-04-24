import React, { Component } from 'react'
import {connect} from 'react-redux'
import Validator from 'validatorjs'
import axios from 'axios'

//components
import TextInput from 'components/TextInput'
import LoadingSpinner from 'components/LoadingSpinner'
import SuccessBlock from 'components/SuccessBlock'
import ErrorBlock from 'components/ErrorBlock'

//actions
import {updateForm, updateErrors, resetForm} from 'actions/contact'

// rules
import {rules, customMessages} from './rules'

class ContactForm extends Component {
  state = {
    loading: false,
    success: false,
    error: false,
    errorMessage: undefined,
    showText: false
  }

  componentDidMount() {
    this.setState({
      showText: this.props.showText
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('AYYYOOO');
    const {
      firstName,
      lastName,
      phone,
      email,
      message,
      updateErrors
    } = this.props

    const data = {
      firstName,
      lastName,
      phone,
      email,
      message
    }

    let validation = new Validator(data, rules, customMessages)
    if (validation.fails()) {
      return updateErrors(validation.errors.errors)
    }
    else {
      this.setState({loading: true, showText: false})
      window.scrollTo(0, 0)

      axios.post('/api/v1/contact', data)
      .then(res => {
        this.setState({
          loading: false,
          success: true,
          error: false,
          errorMessage: undefined
        })
        console.log('Successfully sent a message: ', res)
      })
      .catch(err => {
        this.setState({
          loading: false,
          success: false,
          error: true,
          errorMessage: undefined,
          showText: true
        })
        console.error('Failed to send a message: ', err)
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
      errorMessage: undefined,
      showText: true
    })
    resetForm()
  }

  render() {
    const {
      firstName,
      lastName,
      phone,
      email,
      message,
      errors
    } = this.props
    const {
      loading,
      success,
      showText,
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
          btnText='Send another message?'
          successMessage='We got your message! We will get in contact with (if necessary) as soon as possible. Thank you!'
        />
      )
    }

    return (
    <form onSubmit={this.handleSubmit}>
      {showText &&
        <div className="sub-header-container">
          <p>
            If you need to modify any of your responses or have any questions, please send us a message!
          </p>
        </div>
      }
      {error && <ErrorBlock />}
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
          <TextInput
            inputName='email'
            value={email}
            placeholder='Email Address'
            updateForm={this.onChange}
            errors={errors}
          />
        </div>
        <div className='col-12 form-row'>
          <TextInput
            inputName='message'
            value={message}
            placeholder='Message'
            updateForm={this.onChange}
            errors={errors}
            textArea={true}
          />
        </div>
        <div className='form-group row'>
          <div className='col-12 btn-row'>
            <button className='btn btn-default btn-form' type='submit'>Submit</button>
          </div>
        </div>
      </div>
    </form>
    )
  }
}

const mapStateToProps = store => ({
  firstName: store.contact.firstName,
  lastName: store.contact.lastName,
  phone: store.contact.phone,
  email: store.contact.email,
  message: store.contact.message,
  errors: store.contact.errors
})

const mapDispatchToProps = {
  updateForm,
  updateErrors,
  resetForm
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)
