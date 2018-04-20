import React, {Component} from 'react'
import PropTypes from 'prop-types'

// inputs
import SelectInput from 'components/SelectInput'
import TextInput from 'components/TextInput'

//stylesheet
import './styles.sass'

// SelectInput options array
const dishOptions = [
  <option key={0} value=''>Select Dish</option>,
  <option key={1} value='Appetizer'>Appetizer</option>,
  <option key={2} value='Side Dish'>Side Dish</option>,
  <option key={3} value='Dessert'>Dessert</option>,
  <option key={4} value='Drinks'>Drinks</option>,
  <option key={5} value='other'>Other</option>
]

const appetizerOptions = [
  <option key={0} value=''>Select Appetizer</option>,
  <option key={1} value='Veggie Tray'>Veggie tray</option>,
  <option key={2} value='Fruit Tray'>Fruit Tray</option>,
  <option key={3} value='Chips/Crackers and Dip'>Chips/Crackers &amp; Dip</option>,
  <option key={4} value='Finger Sandiwches'>Finger Sandwiches</option>,
  <option key={5} value='Meat'>Meat (Bite-sized sausage, bacon wrapped meat, etc.)</option>,
  <option key={6} value='other'>Other</option>
]

const sideDishOptions = [
  <option key={0} value=''>Select Side Dish</option>,
  <option key={1} value='Macaroni and Cheese'>Macaroni &amp; Cheese</option>,
  <option key={2} value='Baked Beans'>Baked Beans</option>,
  <option key={3} value='Potato Dish'>Potato Dish (Cheesy potatoes, hash brown casserole, potato salad, etc.) </option>,
  <option key={4} value='Salad'>Salad (Fruit, pasta, macaroni, etc.)</option>,
  <option key={5} value='Coleslaw'>Coleslaw</option>,
  <option key={6} value='other'>Other</option>
]

const dessertOptions = [
  <option key={0} value=''>Select Dessert</option>,
  <option key={1} value='Cake'>Cake</option>,
  <option key={2} value='Brownies'>Brownies</option>,
  <option key={3} value='Cookies'>Cookies</option>,
  <option key={4} value='Salad'>Pie</option>,
  <option key={5} value='other'>Other</option>
]

const drinkOptions = [
  <option key={0} value=''>Select Drink</option>,
  <option key={1} value='Coke/Pepsi'>Coke/Pepsi</option>,
  <option key={2} value='Diet Coke'>Diet Coke</option>,
  <option key={3} value='Dr. Pepper'>Dr. Pepper</option>,
  <option key={4} value='Juice'>Juice</option>,
  <option key={5} value='Tea'>Tea</option>,
  <option key={6} value='other'>Other</option>
]

class SingleDish extends Component {
  state = {
    name: undefined,
    value: undefined,
    num: undefined,
    subDish: {
      otherVal: ''
    }
  }

  componentDidMount() {
    this.setValue()
  }

  componentDidUpdate() {
    console.log('STATE: ', this.state)

    this.setValue()
  }

  setValue = () => {
    const {value} = this.state
    const {index, potluckDishes} = this.props

    for (let i = 0; i < potluckDishes.length; i++) {
      if (potluckDishes[i].name === `dish-${index}` && value !== potluckDishes[i].value) {
        this.setState({
          name: potluckDishes[i].name,
          value: potluckDishes[i].value,
          num: i,
          subDish: potluckDishes[i].subDish ? potluckDishes[i].subDish : {
            otherVal: ''
          }
        })
      }
    }
  }

  updateDish = (value, name) => {
    const {updatePotluckDishes, potluckDishes} = this.props
    console.log('NAME|VAL: ', name, value, potluckDishes)

    let found = false
    for(let i = 0; i < potluckDishes.length; i++) {
      if (potluckDishes[i].name === name) {
        found = true
        potluckDishes[i].value = value
        break
      }
    }
    if (found === false) {
      potluckDishes.push({
        name,
        value
      })
    }
    updatePotluckDishes(potluckDishes)
    this.setValue()
  }

  handleSubDish = (subDishValue, subDishName) => {
    const {name} = this.state
    const {potluckDishes, updatePotluckDishes} = this.props

    console.log('SUBDISH: ', subDishValue, subDishName, name)
    let found = false
    for(let i = 0; i < potluckDishes.length; i++) {
      if (potluckDishes[i].name === name) {
        found = true
        potluckDishes[i].subDish = {
          name: subDishName,
          value: subDishValue,
          otherVal: ''
        }
        this.setState({
          subDish: {
            name: subDishName,
            value: subDishValue,
            otherVal: ''
          }
        })
        break
      }
    }

    updatePotluckDishes(potluckDishes)
  }

  renderAdditionalInputs = () => {
    const {value} = this.state
    const {errors} = this.props

    if (value === 'Appetizer') {
      return (
        <div className='form-row'>
          <SelectInput
            inputName={`appetizer`}
            updateForm={this.handleSubDish}
            options={appetizerOptions}
            errors={errors}
          />
        </div>
      )
    }
    if (value === 'Side Dish') {
      return (
        <div className='form-row'>
          <SelectInput
            inputName={`sideDish`}
            updateForm={this.handleSubDish}
            options={sideDishOptions}
            errors={errors}
          />
        </div>
      )
    }
    if (value === 'Dessert') {
      return (
        <div className='form-row'>
          <SelectInput
            inputName={`dessert`}
            updateForm={this.handleSubDish}
            options={dessertOptions}
            errors={errors}
          />
        </div>
      )
    }
    if (value === 'Drinks') {
      return (
        <div className='form-row'>
          <SelectInput
            inputName={`drink`}
            updateForm={this.handleSubDish}
            options={drinkOptions}
            errors={errors}
          />
        </div>
      )
    }
  }

  renderOtherField = () => {
    const {potluckDishes, updateForm} = this.props
    const {num, value, subDish} = this.state

    if (value === 'other' || (subDish && subDish.value === 'other')) {
      return (
        <TextInput
          inputName='other'
          value={subDish.otherVal}
          placeholder='Other Dish'
          updateForm={this.handleOtherVal}
        />
      )
    }
  }

  handleOtherVal = (value, name) => {
    console.log('handleOtherVal: ', value, name)

    this.setState({
      subDish: Object.assign({}, this.state.subDish, {
        otherVal: value
      })
    })
    this.handleUpdatingOtherSubDishVal(value, name)
  }

  handleUpdatingOtherSubDishVal = (value, name) => {
    const {potluckDishes, updatePotluckDishes} = this.props
    console.log('DKHJDKH: ', value, this.state.name)
    let found = false
    for(let i = 0; i < potluckDishes.length; i++) {
      if (potluckDishes[i].name === this.state.name) {
        console.log('HERE??');
        found = true
        potluckDishes[i].otherVal = value
        potluckDishes[i].subDish = Object.assign({}, this.state.subDish, {
          otherVal: value
        })
        break
      }
    }
    console.log('SUBDISHUUU: ', potluckDishes)
    updatePotluckDishes(potluckDishes)
  }

  render() {
    const {value} = this.state
    const {errors, index} = this.props


    return (
      <div className='dish-wrapper'>
        <div className='dish-container form-row'>
          <SelectInput
            inputName={`dish-${index}`}
            updateForm={this.updateDish}
            options={dishOptions}
            errors={errors}
            value={value}
          />
        </div>
        {this.renderAdditionalInputs()}
        {this.renderOtherField()}
      </div>
    )
  }
}

SingleDish.propTypes = {
  // proptypes go here
}

export default SingleDish
