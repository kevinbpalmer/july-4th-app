import React, {Component} from 'react'
import {connect} from 'react-redux'
import Validator from 'validatorjs'
import axios from 'axios'

//components
import TextInput from 'components/TextInput'
import SelectInput from 'components/SelectInput'
import SuccessBlock from 'components/SuccessBlock'
import ContactBlurb from 'components/ContactBlurb'
import ErrorBlock from 'components/ErrorBlock'

//actions
import {updateForm, updateErrors, resetForm} from 'actions/cornhole'

// validation rules
import {rulesWithPartner, rulesWithout, customMessages} from './rules'

// loading spinner
import loadingSpinner from 'styles/loading.svg'

//stylesheet (s)
import './styles.sass'

//SelectInput options array
const partnerOptions = [
  <option key={0} value=''>Do you have a partner?</option>,
  <option key={1} value='true'>Yes</option>,
  <option key={2} value='false'>No</option>
]

class Cornhole extends Component {
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
      phoneNumber,
      teamName,
      partner,
      partnerFirstName,
      partnerLastName,
      boards,
      updateErrors
    } = this.props

    const data = {
      firstName,
      lastName,
      phoneNumber,
      teamName,
      partner,
      partnerFirstName,
      partnerLastName,
      boards
    }

    let validation = new Validator(data, partner === 'true' ? rulesWithPartner : rulesWithout, customMessages)
    if (validation.fails()) {
      window.scrollTo(0, 0)
      return updateErrors(validation.errors.errors)
    }
    else {
      window.scrollTo(0, 0)
      this.setState({loading: true})

      axios.post('/api/v1/cornhole', data)
      .then(res => {
        this.setState({
          loading: false,
          success: true,
          error: false,
          errorMessage: undefined
        })
        console.log('Cornhole success: ', res)
      })
      .catch(err => {
        this.setState({
          loading: false,
          success: false,
          error: true,
          errorMessage: err
        })
        console.error('Cornhole error: ', err)
      })
    }
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

  render(){
    const {
      firstName,
      lastName,
      phoneNumber,
      teamName,
      partner,
      partnerFirstName,
      partnerLastName,
      boards,
      updateForm,
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
          btnText='Sign up again?'
        />
      )
    }

    return (
      <div className='form-container container'>
        <div className='cornhole-info'>
          <p>Date: Saturday, June 30th</p>
          <p>Time: 2:00 pm</p>
          <p>Location: 1306 Harvest Grove Blvd.</p>
          <p>Entry Fee: $10 per Team (Pay at tournament)</p>
          <p>Prize: Prize Money & Trophy - 1st & 2nd Place </p>
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
                inputName='phoneNumber'
                value={phoneNumber}
                placeholder='Phone Number'
                updateForm={updateForm}
                errors={errors}
                />
            </div>
            <div className='col-12 form-row'>
              <TextInput
                inputName='teamName'
                value={teamName}
                placeholder='Team Name'
                updateForm={updateForm}
                errors={errors}
                />
            </div>
            <div className='col-12 form-row'>
              <SelectInput
                inputName='partner'
                value={partner}
                options={partnerOptions}
                updateForm={updateForm}
                errors={errors}
                />
            </div>
            {partner === 'true' &&
            <div className='col-12 form-row'>
              <TextInput
                inputName='partnerFirstName'
                value={partnerFirstName}
                placeholder='Partner First Name'
                updateForm={updateForm}
                errors={errors}
                />
              </div>}
              {partner === 'true' &&
              <div className='col-12 form-row'>
                <TextInput
                  inputName='partnerLastName'
                  value={partnerLastName}
                  placeholder='Partner Last Name'
                  updateForm={updateForm}
                  errors={errors}
                  />
                </div>}
                {partner === 'no' &&
                <div className='col-12 form-row'>
                  <h4 className='partner-text'> You will be paired up with a partner at the event!</h4>
                </div>}
            <div className='col-12 form-row'>
              <TextInput
                inputName='boards'
                value={boards}
                placeholder='How many boards can you bring?'
                updateForm={updateForm}
                errors={errors}
                number={true}
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
  firstName: store.cornhole.firstName,
  lastName: store.cornhole.lastName,
  phoneNumber: store.cornhole.phoneNumber,
  teamName: store.cornhole.teamName,
  partner: store.cornhole.partner,
  partnerFirstName: store.cornhole.partnerFirstName,
  partnerLastName: store.cornhole.partnerLastName,
  boards: store.cornhole.boards,
  errors: store.cornhole.errors
})

const mapDispatchToProps = {
  updateForm,
  updateErrors,
  resetForm
};

export default connect(mapStateToProps, mapDispatchToProps)(Cornhole);
