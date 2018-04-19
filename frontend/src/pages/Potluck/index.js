import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Validator from 'validatorjs'

// components
import TextInput from 'components/TextInput'
import SingleDish from './SingleDish'

// actions
import {updateForm, updatePotluckDishes} from 'actions/potluck'

class Potluck extends Component {
  state = {
    dishesNum: []
  }

  addDish = () => {
    const {dishesNum} = this.state

    dishesNum.push(SingleDish)
    this.setState({dishesNum})
  }

  renderDishes = () => {
    const {updatePotluckDishes, errors, potluckDishes} = this.props
    const {dishesNum} = this.state

    const renderedDishes = dishesNum.map((item, index) => {
      return (
        <div key={index} className='col-12 form-row'>
          <SingleDish
            index={index}
            updatePotluckDishes={updatePotluckDishes}
            potluckDishes={potluckDishes}
            errors={errors}
            value="val"
          />
        </div>
      )
    })

    //console.log('listItems: ', renderedDishes)
    return renderedDishes
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('FIRE')
  }

  render() {
    const {firstName, lastName, phone, email, updateForm, errors} = this.props

    return (
      <div className='form-container container'>
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
            <div onClick={this.addDish} className='col-12 form-row'>
              Add Dish
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
  updatePotluckDishes
}

Potluck.propTypes = {
  // proptypes go here
}

export default connect(mapStateToProps, mapDispatchToProps)(Potluck)
