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
  <option key={1} value='appetizer'>Appetizer</option>,
  <option key={2} value='sideDish'>Side Dish</option>,
  <option key={3} value='dessert'>Dessert</option>,
  <option key={4} value='drinks'>Drinks</option>,
  <option key={5} value='other'>Other</option>
]

const appetizerOptions = [
  <option key={0} value=''>Select Appetizer</option>,
  <option key={1} value='veggieTray'>Veggie tray</option>,
  <option key={2} value='fruitTray'>Fruit Tray</option>,
  <option key={3} value='chipsPlusDip'>Chips/Crackers &amp; Dip</option>,
  <option key={4} value='fingerSandwiches'>Finger Sandwiches</option>,
  <option key={5} value='meat'>Meat (Bite-sized sausage, bacon wrapped meat, etc.)</option>,
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
    console.log('SUBDISHUUU: ', potluckDishes)
    updatePotluckDishes(potluckDishes)
  }

  renderAdditionalInputs = () => {
    const {value} = this.state
    const {potluckDishes, errors} = this.props

    if (value === 'appetizer') {
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
  }

  renderOtherField = () => {
    const {potluckDishes, updateForm} = this.props
    const {num, value, subDish} = this.state

    console.log('RENDEROTHERFIELD: ', subDish)
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
