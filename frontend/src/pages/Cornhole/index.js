import React, {Component} from 'react'
import {connect} from 'react-redux'
import Validator from 'validatorjs'

//components
import TextInput from 'components/TextInput'
import SelectInput from 'components/SelectInput'

//actions
import {updateForm, updateErrors} from 'actions/cornhole'

// validation rules
import {rulesWithPartner, rulesWithout, customMessages} from './rules'

//stylesheet (s)
import './styles.sass'

//SelectInput options array
const partnerOptions = [
  <option key={0} value=''>Select One</option>,
  <option key={1} value='yes'>Yes</option>,
  <option key={2} value='no'>No</option>
]

class Cornhole extends Component {
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
      updateForm,
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

    let validation = new Validator(data, partner === 'yes' ? rulesWithPartner : rulesWithout, customMessages)
    if (validation.fails()) {
      window.scrollTo(0, 0)
      return updateErrors(validation.errors.errors)
    }
    else {
      window.scrollTo(0, 0)
      updateErrors(validation.errors.errors)
    }
    console.log('props', this.props);
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

    return (
      <div className='cornhole-form-container container'>
        <div className='cornhole-info'>
          <h3>Cornhole Tournament Sign-Up</h3>
          <p>Harvest Annual Cornhole Tournament</p>
              <p>Date: Saturday, June 30th</p>
              <p>Time: 2:00 pm</p>
              <p>Location: 1306 Harvest Grove Blvd.</p>
              <p>Entry Fee: $10 per Team (Pay at tournament)</p>
              <p>Prize: Prize Money & Trophy - 1st & 2nd Place </p>
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
                placeholder='last Name'
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
            {partner === 'yes' &&
            <div className='col-12 form-row'>
              <TextInput
                inputName='partnerFirstName'
                value={partnerFirstName}
                placeholder='Partner First Name'
                updateForm={updateForm}
                errors={errors}
                />
              </div>}
              {partner === 'yes' &&
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
                placeholder='How many boards?'
                updateForm={updateForm}
                errors={errors}
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
  updateErrors
};

export default connect(mapStateToProps, mapDispatchToProps)(Cornhole);
