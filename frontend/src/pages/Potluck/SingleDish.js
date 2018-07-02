import React, {Component} from 'react'
import PropTypes from 'prop-types'

// inputs
import SelectInput from 'components/SelectInput'
import TextInput from 'components/TextInput'

//stylesheet
import './styles.sass'

const categoryOptions = [
  <option key={0} value=''>Select Dish</option>,
  <option key={2} value='sideDish'>Side Dish</option>,
  <option key={3} value='dessert'>Dessert</option>,
  <option key={4} value='drinks'>Drinks</option>,
  <option key={5} value='other'>Dinner Supplies</option>
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
    console.log(this.props);
  }

  componentDidUpdate(prevProps, prevState) {
    this.setValue()
  }

  getArray = categoryName => {
    const {dbDishes} = this.props

    const appetizerOptions = [
      {
        label: 'Select Appetizer',
        value: '',
        count: undefined,
        placeholder: true
      },
      {
        label: 'Veggie Tray',
        value: 'veggieTray',
        count: (7 - dbDishes['veggieTray'])
      },
      {
        label: 'Fruit Tray',
        value: 'fruitTray',
        count: (7 - dbDishes['fruitTray'])
      },
      {
        label: 'Chips/Crackers & Dip',
        value: 'chipsAndDip',
        count: (7 - dbDishes['chipsAndDip'])
      },
      {
        label: 'Finger Sandwiches',
        value: 'fingerSandwiches',
        count: (7 - dbDishes['fingerSandwiches'])
      },
      {
        label: 'Meat (Bite-sized sausage, bacon wrapped meat, etc.)',
        value: 'meat',
        count: (6 - dbDishes['meat'])
      },
      {
        label: 'Other',
        value: 'other',
        count: (5 - dbDishes['other_appetizer'])
      }
    ]

    const sideDishOptions = [
      {
        label: 'Select Side-Dish',
        value: '',
        count: undefined,
        placeholder: true
      },
      {
        label: 'Chips and Dip',
        value: 'chipsAndDip',
        count: (9 - dbDishes['chipsAndDip'])
      },
      {
        label: 'Macaroni And Cheese',
        value: 'macaroniAndCheese',
        count: (16 - dbDishes['macaroniAndCheese'])
      },
      {
        label: 'Baked Beans',
        value: 'bakedBeans',
        count: (16 - dbDishes['bakedBeans'])
      },
      {
        label: 'Potato Dish (Cheesy potatoes, hash brown casserole, potato salad, etc.)',
        value: 'potatoDish',
        count: (16 - dbDishes['potatoDish'])
      },
      {
        label: 'Salad (Fruit, pasta, macaroni, etc.)',
        value: 'salad',
        count: (16 - dbDishes['salad'])
      }
    ]

    const dessertOptions = [
      {
        label: 'Select Dessert',
        value: '',
        count: undefined,
        placeholder: true
      },
      {
        label: 'Cake',
        value: 'cake',
        count: (8 - dbDishes['cake'])
      },
      {
        label: 'Brownies',
        value: 'brownies',
        count: (10 - dbDishes['brownies'])
      },
      {
        label: 'Cookies',
        value: 'cookies',
        count: (10 - dbDishes['cookies'])
      },
      {
        label: 'Pie',
        value: 'pie',
        count: (6 - dbDishes['pie'])
      },
      {
        label: 'Other',
        value: 'other',
        count: (8 - dbDishes['other_dessert'])
      }
    ]

    const drinkOptions = [
      {
        label: 'Select Drink',
        value: '',
        count: undefined,
        placeholder: true
      },
      {
        label: 'Coke/Pepsi',
        value: 'coke/Pepsi',
        count: (9 - dbDishes['coke_pepsi'])
      },
      {
        label: 'Sprite',
        value: 'sprite',
        count: (9 - dbDishes['sprite'])
      },
      {
        label: 'Diet Coke',
        value: 'dietCoke',
        count: (8 - dbDishes['dietCoke'])
      },
      {
        label: 'Dr. Pepper',
        value: 'drPepper',
        count: (9 - dbDishes['drPepper'])
      },
      {
        label: 'Sweet Tea - 2 gallons',
        value: 'tea',
        count: (6 - dbDishes['tea'])
      }
    ]

    const otherOptions = [
      {
        label: 'Select Option',
        value: '',
        count: undefined,
        placeholder: true
      },
      {
        label: 'Patriotic Napkins (Large Pack)',
        value: 'napkins',
        count: (9 - dbDishes['napkins'])
      },
      {
        label: 'Solo Cups (Member’s Mark Red Cups 18 oz - 252 count from Sam’s Club)',
        value: 'soloCups',
        count: (3 - dbDishes['soloCups'])
      },
      {
        label: 'Plastic Forks (Member’s Mark White Forks from Sam’s Club - 600 count)',
        value: 'plasticForks',
        count: (1 - dbDishes['plasticForks'])
      },
      {
        label: 'Plastic Spoons (Member’s Mark White Spoons from Sam’s Club - 600 count)',
        value: 'plasticSpoons',
        count: (1 - dbDishes['plasticSpoons'])
      },
      {
        label: '3-Section Foam Plates (Hefty Supreme from Sam’s Club - 200 count)',
        value: 'threeSectionPlates',
        count: (4 - dbDishes['threeSectionPlates'])
      }
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
      case 'other':
        return otherOptions
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

    if (value) {
      return (
        <div className='form-row'>
          <SelectInput
            inputName={value}
            updateForm={this.handleSubDish}
            countOptions={this.getArray(value)}
            options={[]}
            errors={errors}
            optionCounts={dishCounts}
          />
        </div>
      )
    }
  }

  renderOtherField = () => {
    const {value, subDish} = this.state

    if (subDish && subDish.value === 'other') {
      return (
        <TextInput
          inputName='other'
          value={subDish.otherVal}
          placeholder='Write details here...'
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

  renderInfo = value => {
    switch (value) {
      case 'appetizer':
        return <label>1 appetizer = 20-30 small servings, 1 tray, etc.</label>
        break;
      case 'sideDish':
        return <label>1 side dish = 15 - 20 cups, 9” x 13” pan, 5-quart crock-pot, etc.</label>
        break;
      case 'dessert':
        return <label>1 dessert = 1 cake/pie, 2-dozen cookies, 9” x 13” pan, etc.</label>
        break;
      case 'drinks':
        return <label>1 drink = 24-pack CANS <br /> PLEASE DROP BEVERAGES OFF PRIOR TO EVENT DAY (A reminder will be sent out)</label>
        break;
      case 'other':
        return <label>PLEASE DROP OFF PRIOR TO EVENT DAY (A reminder will be sent out)</label>
        break;
      default:
        return null
    }
  }

  render() {
    const {value} = this.state
    const {errors, index} = this.props

    return (
      <div className='dish-wrapper'>
        <div className='dish-container form-row'>
          {value && this.renderInfo(value)}
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
