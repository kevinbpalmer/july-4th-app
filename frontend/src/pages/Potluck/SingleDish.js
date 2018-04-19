import React, {Component} from 'react'
import PropTypes from 'prop-types'

// inputs
import SelectInput from 'components/SelectInput'

// SelectInput options array
const preferredCommOptions = [
  <option key={0} value=''>Select Dish</option>,
  <option key={1} value='appetizer'>Appetizer</option>,
  <option key={2} value='sideDish'>Side Dish</option>,
  <option key={3} value='dessert'>Dessert</option>,
  <option key={4} value='drinks'>Drinks</option>,
  <option key={5} value='other'>Other</option>
]

class SingleDish extends Component {
  state = {
    value: undefined
  }

  componentDidMount() {
    this.setValue()
  }

  componentDidUpdate() {
    this.setValue()
  }

  setValue = () => {
    const {value} = this.state
    const {index, potluckDishes} = this.props
    console.log('fIYAH');

    for (let i = 0; i < potluckDishes.length; i++) {
      if (potluckDishes[i].name === `dish-${index}` && value !== potluckDishes[i].value) {
        this.setState({
          value: potluckDishes[i].value
        })
      }
    }
  }

  renderMessage = () => {

  }

  updateDish = (value, name) => {
    const {updatePotluckDishes, potluckDishes} = this.props
    console.log('NAME|VAL: ', name, value, potluckDishes)
    let found = false
    for(let i = 0; i < potluckDishes.length; i++) {
      if (potluckDishes[i].name === name) {
        console.log('FOUND! ', potluckDishes[i].name, i)
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
  }

  render() {
    const {errors, value, index} = this.props

    return (
      <SelectInput
        inputName={`dish-${index}`}
        value={value}
        updateForm={this.updateDish}
        options={preferredCommOptions}
        errors={errors}
      />
    )
  }
}

SingleDish.propTypes = {
  // proptypes go here
}

export default SingleDish
