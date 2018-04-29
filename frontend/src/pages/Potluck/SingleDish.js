import React, {Component} from 'react'
import PropTypes from 'prop-types'

// inputs
import SelectInput from 'components/SelectInput'
import TextInput from 'components/TextInput'

//stylesheet
import './styles.sass'

const categoryOptions = [
  <option key={0} value=''>Select Dish</option>,
  <option key={1} value='appetizer'>Appetizer</option>,
  <option key={2} value='sideDish'>Side Dish</option>,
  <option key={3} value='dessert'>Dessert</option>,
  <option key={4} value='drinks'>Drinks</option>,
  <option key={5} value='other'>Other</option>
]

class SingleDish extends Component {
  state = {
    name: undefined,
    value: undefined,
    num: undefined,
    subDish: {
      name: '',
      value: '',
      otherVal: ''
    },
    databaseCount: undefined
  }

  componentDidMount() {
    this.setValue()
  }

  componentDidUpdate(prevProps, prevState) {
    const {value, subDish} = this.state

    this.setValue()
  }

  getCount = name => {
    const {dishCounts} = this.props
    const maxCounts = {
      veggieTray: 6,
      fruitTray: 6,
      chipsAndDip: 6,
      fingerSandwiches: 5,
      meat: 5
    }
    console.log('NAME: ', name, dishCounts)

    const returnCountText = num => {
      return `- ${num}`
    }

    if (!dishCounts || dishCounts.length < 1) {
      return
    }

    if (dishCounts.hasOwnProperty(name)) {
      let count = dishCounts[name]
      console.log('YESSSSS: ', count);
      return returnCountText(count)
    }

    return null
  }

  getArray = (categoryName) => {
    const appetizerOptions = [
      <option key={0} value=''>Select Appetizer</option>,
      <option key={1} value='veggieTray'>Veggie tray</option>,
      <option key={2} value='fruitTray'>Fruit Tray</option>,
      <option key={3} value='chipsAndDip'>Chips/Crackers &amp; Dip</option>,
      <option key={4} value='fingerSandwiches'>Finger Sandwiches</option>,
      <option key={5} value='meat'>Meat (Bite-sized sausage, bacon wrapped meat, etc.)</option>,
      <option key={6} value='other'>Other</option>
    ]

    const sideDishOptions = [
      <option key={0} value=''>Select sideDish</option>,
      <option key={1} value='macaroniAndCheese'>Macaroni &amp; Cheese</option>,
      <option key={2} value='bakedBeans'>Baked Beans</option>,
      <option key={3} value='potatoDish'>Potato Dish (Cheesy potatoes, hash brown casserole, potato salad, etc.) </option>,
      <option key={4} value='salad'>Salad (Fruit, pasta, macaroni, etc.)</option>,
      <option key={5} value='coleslaw'>Coleslaw</option>,
      <option key={6} value='other'>Other</option>
    ]

    const dessertOptions = [
      <option key={0} value=''>Select Dessert</option>,
      <option key={1} value='cake'>Cake</option>,
      <option key={2} value='brownies'>Brownies</option>,
      <option key={3} value='cookies'>Cookies</option>,
      <option key={4} value='salad'>Pie</option>,
      <option key={5} value='other'>Other</option>
    ]

    const drinkOptions = [
      <option key={0} value=''>Select Drink</option>,
      <option key={1} value='coke/Pepsi'>Coke/Pepsi</option>,
      <option key={2} value='dietCoke'>Diet Coke</option>,
      <option key={3} value='drPepper'>Dr. Pepper</option>,
      <option key={4} value='juice'>Juice</option>,
      <option key={5} value='tea'>Tea</option>,
      <option key={6} value='other'>Other</option>
    ]

    switch (categoryName) {
      case 'category':
        return categoryOptions
        break;
      case 'appetizer':
        return appetizerOptions
        break;
      case 'sideDish':
        return sideDishOptions
        break;
      case 'dessert':
        return dessertOptions
        break;
      case 'drinks':
        return drinkOptions
        break;
      default:
        return []
    }
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
            name: '',
            value: '',
            otherVal: ''
          }
        })
      }
    }
  }

  updateDish = (value, name) => {
    const {updatePotluckDishes, potluckDishes} = this.props

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

    for(let i = 0; i < potluckDishes.length; i++) {
      if (potluckDishes[i].name === name) {
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
    const {errors, dishCounts} = this.props

    if (value && value !== 'other') {
      return (
        <div className='form-row'>
          <SelectInput
            inputName={value}
            updateForm={this.handleSubDish}
            options={this.getArray(value)}
            errors={errors}
            optionCounts={dishCounts}
          />
        </div>
      )
    }
  }

  renderOtherField = () => {
    const {value, subDish} = this.state

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
    this.setState({
      subDish: Object.assign({}, this.state.subDish, {
        otherVal: value
      })
    })
    this.handleUpdatingOtherSubDishVal(value, name)
  }

  handleUpdatingOtherSubDishVal = (value, name) => {
    const {potluckDishes, updatePotluckDishes} = this.props

    for(let i = 0; i < potluckDishes.length; i++) {
      if (potluckDishes[i].name === this.state.name) {
        potluckDishes[i].otherVal = value
        potluckDishes[i].subDish = Object.assign({}, this.state.subDish, {
          otherVal: value
        })
        break
      }
    }
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
            options={categoryOptions}
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
  errors: PropTypes.object,
  index: PropTypes.number,
  updatePotluckDishes: PropTypes.func.isRequired
}

export default SingleDish
