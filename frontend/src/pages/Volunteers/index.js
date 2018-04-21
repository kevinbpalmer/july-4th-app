import React, { Component } from 'react'
import {connect} from 'react-redux'
import Validator from 'validatorjs'

//components
import TextInput from 'components/TextInput'
import SelectInput from 'components/SelectInput'

//actions
import {updateForm, updateErrors} from 'actions/volunteers'

//stylesheet (s)
import './styles.sass'


//SelectInput options array
const volunteerOptions = [
  <option key={0} value=''>Select One</option>,
  <option key={1} value='nameTag'>Name Tag Committee</option>,
  <option key={2} value='cornhole'>Cornhole Coordinator</option>,
  <option key={3} value='potluck'>Potluck Committee</option>,
  <option key={4} value='fireworks'>Firework Committee</option>,
  <option key={5} value='clean'>Clean Up Committee</option>
]

class Volunteers extends Component {
  handleSubmit = e => {
    e.preventDefault()
    const {
      volunteer,
      nameTagFirstName,
      nameTagLastName,
      nameTagEmail,
      nameTagPhoneNumber,
      cornholeFirstName,
      cornholeLastName,
      cornholePhoneNumber,
      potluckFirstName,
      potluckLastName,
      potluckPhoneNumber,
      fireworksFirstName,
      fireworksLastName,
      fireworksPhoneNumber,
      cleanFirstName,
      cleanLastName,
      cleanPhoneNumber,
      updateForm,
      cornholeEmail,
      potluckEmail,
      fireworksEmail,
      cleanEmail,
      updateErrors
    } = this.props

    const data = {
    volunteer,
    nameTagFirstName,
    nameTagLastName,
    nameTagEmail,
    nameTagPhoneNumber,
    cornholeFirstName,
    cornholeLastName,
    cornholePhoneNumber,
    potluckFirstName,
    potluckLastName,
    potluckPhoneNumber,
    fireworksFirstName,
    fireworksLastName,
    fireworksPhoneNumber,
    cleanFirstName,
    cleanLastName,
    cleanPhoneNumber,
    cornholeEmail,
    potluckEmail,
    fireworksEmail,
    cleanEmail
    }

    console.log('props', volunteer);
  }

  onInputChange = e => {
    console.log('change', e.target.value);
  }

  render() {
    const {
      volunteer,
      nameTagFirstName,
      nameTagLastName,
      nameTagEmail,
      nameTagPhoneNumber,
      cornholeFirstName,
      cornholeLastName,
      cornholePhoneNumber,
      potluckFirstName,
      potluckLastName,
      potluckPhoneNumber,
      fireworksFirstName,
      fireworksLastName,
      fireworksPhoneNumber,
      cleanFirstName,
      cleanLastName,
      cleanPhoneNumber,
      cornholeEmail,
      potluckEmail,
      fireworksEmail,
      cleanEmail,
      errors,
      updateForm
    } = this.props

    return (
      <div className='volunteers-form-container container'>
        <div className='volunteers-info'>
          <h3>Event Volunteer Sign-Up</h3>
          <p>
            To ensure the event runs as smoothly as possible, there will be
            committees put in place this year to help with various tasks
            pertaining to the event. Your help and time are more than
            appreciated!
          </p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group row'>
            <div className='col-12 form-row'>
              <SelectInput
                inputName='volunteer'
                value={volunteer}
                options={volunteerOptions}
                updateForm={updateForm}
                errors={errors}
                onChange={this.onInputChange}
                />
            </div>
            {volunteer === 'nameTag' &&
              <div className='col-12 form-row'>
                <TextInput
                  inputName='first name'
                  value={`${volunteer}FirstName`}
                  placeholder='First Name'
                  updateForm={updateForm}
                  errors={errors}
                  />
                </div>}
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
  volunteer: store.volunteers.volunteer,
  nameTagFirstName: store.volunteers.nameTagFirstName,
  nameTagLastName: store.volunteers.nameTagLastName,
  nameTagEmail: store.volunteers.nameTagEmail,
  nameTagPhoneNumber: store.volunteers.nameTagPhoneNumber,
  cornholeFirstName: store.volunteers.cornholeFirstName,
  cornholeLastName: store.volunteers.cornholeLastName,
  cornholeEmail: store.volunteers.cornholeEmail,
  cornholePhoneNumber: store.volunteers.cornholePhoneNumber,
  potluckFirstName: store.volunteers.potluckFirstName,
  potluckLastName: store.volunteers.potluckLastName,
  potluckEmail: store.volunteers.potluckEmail,
  potluckPhoneNumber: store.volunteers.potluckPhoneNumber,
  fireworksFirstName: store.volunteers.fireworksFirstName,
  fireworksLastName: store.volunteers.fireworksLastName,
  fireworksEmail: store.volunteers.fireworksEmail,
  fireworksPhoneNumber: store.volunteers.fireworksPhoneNumber,
  cleanFirstName: store.volunteers.cleanFirstName,
  cleanLastName: store.volunteers.cleanLastName,
  cleanEmail: store.volunteers.cleanEmail,
  cleanPhoneNumber: store.volunteers.cleanPhoneNumber,
  errors: store.volunteers.errors
})

const mapDispatchToProps = {
  updateForm,
  updateErrors
};

export default connect(mapStateToProps, mapDispatchToProps)(Volunteers);
