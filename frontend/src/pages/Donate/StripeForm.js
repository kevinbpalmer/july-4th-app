import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {CardElement, injectStripe} from 'react-stripe-elements'
import {connect} from 'react-redux'
import Validator from 'validatorjs'
import axios from 'axios'

// form components
import TextInput from 'components/TextInput'

// actions
import {updateForm, updateErrors} from 'actions/donate'

// validation rules
import {rules, customMessages} from './rules'

// loading spinner
import loadingSpinner from 'styles/loading.svg'

class StripeForm extends Component {
  state = {
    loading: false,
    success: false,
    error: false,
    errorMessage: undefined
  }


  handleSubmit = e => {
    const {firstName, lastName, updateErrors, amount, stripe} = this.props
    e.preventDefault()

    let validation = new Validator({firstName, lastName, amount}, rules, customMessages)
    if (validation.fails()) {
      updateErrors(validation.errors.errors)
    }
    else {
      const strippedAmount =  parseFloat(amount.replace('.', ''))

      stripe
      .createToken({name: `${firstName} ${lastName}`})
      .then(({token}) => {
        this.setState({
          loading: true
        })
        if (typeof token !== 'undefined') {
          axios.post('/api/v1/payment', {
            stripeToken: token,
            amount: strippedAmount
          })
          .then(res => {
            console.log('SUCCESS: ', res.data)

            this.setState({
              loading: false,
              success: true,
              error: false,
              errorMessage: undefined
            })
          })
          .catch(err => {
            console.error('ERROR: ', err)

            this.setState({
              loading: false,
              success: false,
              error: true,
              errorMessage: err.message
            })
          })
        }
        else {
          this.setState({
            success: false,
            loading: false,
            error: true,
            errorMessage: 'Check your credit card information and try again'
          })
        }
      })
    }
  }

  updateForm = (value, inputName) => {
    const {updateForm, errors, firstName, lastName, updateErrors} = this.props
    let validation = new Validator({firstName, lastName}, rules.inputName, customMessages)

    // if the there are validation errors then check to see if what the user is typing resolves them
    if (validation.passes() && errors && Object.keys(errors).length > 0) {
      const mergedErrors = Object.assign({}, errors, { [inputName]: validation.errors.errors[inputName] })
      updateErrors(mergedErrors)
    }

    if (inputName === 'amount') {
      const newVal = value.replace('.', '')

      var numOnly = new RegExp('^[0-9]+$');
      if (numOnly.test(newVal) === false) {
        return
      }

      if (newVal.length === 1) {
        const valueWithDecimalsAdded = '.' + 0 + newVal.slice(-1)
        return updateForm(valueWithDecimalsAdded, inputName)
      }

      if (newVal.substring(0, 1) === '0') {
        const valueWithDecimalsAdded = newVal.slice(1, -2) + '.' + newVal.slice(-2)
        return updateForm(valueWithDecimalsAdded, inputName)
      }

      const valueWithDecimalsAdded = newVal.slice(0, -2) + '.' + newVal.slice(-2)
      return updateForm(valueWithDecimalsAdded, inputName)
    }

    updateForm(value, inputName)
  }

  render() {
    const {firstName, lastName, amount, errors} = this.props
    const {error, errorMessage, success, loading} = this.state

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
        <div className='success-wrapper'>
          <h2>Success!</h2>
          <p>
            We look forward to seeing you at the event!
          </p>
        </div>
      )
    }

    return (
      <form onSubmit={this.handleSubmit}>
        {error &&
          <div className='error-wrapper'>
            <p>
              Your payment was unsuccessful. Please try again!
            </p>
          </div>}

          <div className='form-group row'>
            <div className='col-12 form-row'>
              <TextInput
                inputName='firstName'
                value={firstName}
                placeholder='First Name'
                updateForm={this.updateForm}
                errors={errors}
              />
            </div>
            <div className='col-12 form-row'>
              <TextInput
                inputName='lastName'
                value={lastName}
                placeholder='Last Name'
                updateForm={this.updateForm}
                errors={errors}
              />
            </div>
            <div className='col-12 form-row'>
              <CardElement
                style={{
                  base: {
                    fontSize: '16px',
                    fontFamily: 'Coming Soon'
                  }
                }}
              />
            </div>
            <div className='col-12 form-row'>
              <TextInput
                inputName='amount'
                value={amount}
                placeholder='Amount'
                updateForm={this.updateForm}
                errors={errors}
              />
            </div>
          </div>

          <button
            className="btn btn-default btn-form"
            type="submit">Submit</button>
          </form>
        )
      }
    }

    StripeForm.propTypes = {
      // proptypes go here
    }

    const mapStateToProps = store => ({
      firstName: store.donate.firstName,
      lastName: store.donate.lastName,
      amount: store.donate.amount,
      errors: store.donate.errors
    })

    const mapDispatchToProps = {
      updateForm,
      updateErrors
    }

    export default injectStripe(connect(mapStateToProps, mapDispatchToProps)(StripeForm))