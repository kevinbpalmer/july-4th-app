import React, {Component} from 'react'
import {connect} from 'react-redux'
import Validator from 'validatorjs'
import axios from 'axios'

// components
import TextInput from 'components/TextInput'
import SingleDish from './SingleDish'
import SuccessBlock from 'components/SuccessBlock'
import LoadingSpinner from 'components/LoadingSpinner'
import ContactBlurb from 'components/ContactBlurb'
import ErrorBlock from 'components/ErrorBlock'

// actions
import {updateForm, updatePotluckDishes, updateErrors, resetForm} from 'actions/potluck'

// validation rules
import {rules, customMessages} from './rules'

class Potluck extends Component {
  state = {
    dishesNum: [],
    errMessage: undefined,
    loading: false,
    success: false,
    error: false,
    errorMessage: undefined,
    dbDishes: undefined
  }

  componentDidMount() {
    this.fetchDishes()
  }

  fetchDishes = () => {
    axios
    .get('/api/v1/potluck')
    .then(res => {
      this.setState({
        dbDishes: res.data
      })
    })
    .catch(err => {
      process.env.DEBUG && console.error('Error fetching dishes from DB: ', err)
    })
  }

  addDish = () => {
    const {dishesNum} = this.state

    dishesNum.push(SingleDish)
    this.setState({dishesNum})
  }

  renderDishes = () => {
    const {updatePotluckDishes, errors, potluckDishes} = this.props
    const {dishesNum, dbDishes} = this.state

    const renderedDishes = dishesNum.map((item, index) => {
      return (
        <div key={index} className='col-12 form-row'>
          <SingleDish
            index={index}
            updatePotluckDishes={updatePotluckDishes}
            removeDish={this.removeDish}
            potluckDishes={potluckDishes}
            errors={errors}
            dbDishes={dbDishes}
          />
        </div>
      )
    })

    return renderedDishes
  }

  handleSubmit = (e) => {
    const {
      firstName,
      lastName,
      phone,
      email,
      potluckDishes,
      updateErrors
    } = this.props

    const data = {
      firstName,
      lastName,
      phone,
      email,
      potluckDishes
    }

    e.preventDefault()

    let validation = new Validator(data, rules, customMessages)

    if (validation.fails() || potluckDishes.length < 1) {
      window.scrollTo(0, 0)
      this.setState({
        errorMessage: 'Please add at least one dish'
      })
      return updateErrors(validation.errors.errors)
    }
    else {
      this.setState({
        loading: true,
        errorMessage: undefined
      })

      axios
      .post('/api/v1/potluck', data)
      .then(res => {
        this.setState({
          loading: false,
          success: true,
          error: false,
          errorMessage: undefined
        })
        console.log('Potluck success! ', res)
      })
      .catch(err => {
        this.setState({
          loading: false,
          success: false,
          error: true,
          errorMessage: undefined
        })
        console.error('Potluck fail! ', err)
      })
    }
  }

  resetForm = () => {
    const {resetForm} = this.props

    this.setState({
      loading: false,
      success: false,
      error: false,
      errorMessage: undefined,
      dishesNum: []
    })
    resetForm()
    this.fetchDishes()
  }

  render() {
    const {firstName, lastName, phone, email, updateForm, errors} = this.props
    const {errorMessage, success, loading, error} = this.state

    if (loading) {
      return <LoadingSpinner />
    }

    if (success) {
      return (
        <SuccessBlock
          resetForm={this.resetForm}
          btnText='Bring more dishes?'
        />
      )
    }

    return (
      <div className='form-container container'>
        <p>Date: Saturday, June 30th</p>
        <p>Time: 6:00 pm - Rain or Shine!</p>
        <p>Location: 1306 Harvest Grove Blvd.</p>

        <p>Main course will be - pulled pork & chicken thighs</p>

        <p>
          Serving spoons and tongs will be provided. Please label all dishes with your name.
          Extension cords will be available for crockpots.
        </p>

          <b>
            <p>
              DO NOT BRING POTLUCK DINNER DISHES UNTIL 5:45 PM ON EVENT DAY. <br />
              THERE IS NO ROOM TO STORE FOOD PRIOR TO THE POTLUCK. <br />
              POTLUCK COMMITTEE WILL BE AVAILABLE TO INSTRUCT WHERE TO PUT DISHES
            </p>
          </b>

        <p>BYOB  - Keg beer available all day.</p>
        <p>Potluck will take place at 6:00 pm - rain or shine!</p>
        <p>Thank you so much for your participation!</p>
        <ContactBlurb />
        {error && <ErrorBlock />}
        <form onSubmit={this.handleSubmit}>
          <div className='form-row'>
            <div className='has-error'>
              <span>
                {errorMessage}
              </span>
            </div>
          </div>

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
                inputName='email'
                value={email}
                placeholder='Email Address'
                updateForm={updateForm}
                errors={errors}
              />
            </div>
            <div className='col-12 form-row'>
              <TextInput
                inputName='phone'
                value={phone}
                placeholder='Phone Number'
                updateForm={updateForm}
                errors={errors}
              />
            </div>
            {this.renderDishes()}
            <div className='col-12 form-row'>
              <span onClick={this.addDish} className='btn btn-default'>
                + Add Dish
              </span>
            </div>
          </div>
          <div className='form-group row'>
            <div className='col-auto btn-row'>
              <button className='btn btn-default btn-form' type='submit'>Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (store) => ({
  firstName: store.potluck.firstName,
  lastName: store.potluck.lastName,
  phone: store.potluck.phone,
  email: store.potluck.email,
  errors: store.potluck.errors,
  potluckDishes: store.potluck.dishes
})

const mapDispatchToProps = {
  updateForm,
  updatePotluckDishes,
  updateErrors,
  resetForm
}

export default connect(mapStateToProps, mapDispatchToProps)(Potluck)
