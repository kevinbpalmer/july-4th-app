import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SelectInput extends Component {
  state = {
    touched: false
  }

  renderClassName = () => {
    const {errors, inputName} = this.props

    if (typeof errors === 'object' && errors.hasOwnProperty(inputName)) {

      return 'has-error input-wrapper'
    }


    return 'no-error input-wrapper'
  }

  renderOptions = () => {
    const {options} = this.props

    const listItems = options.map((item) => {
      return item
    })

    return listItems
  }

  renderCountOptions = () => {
    const {countOptions} = this.props
    process.env.REACT_APP_DEBUG && console.log('countOptions: ', countOptions)

    const options = countOptions.map((item, index) => {
      if (item.placeholder === true) {
        return <option key={index} value={item.value}>{item.label}</option>
      }
      else if (item.count > 0) {
        return <option key={index} value={item.value}>{item.label} {item.count && `- ${item.count} ${item.count === 1 ? 'Slot' : 'Slots'} Left`}</option>
      }
      else if (item.count < 1) {
        return null
      }
      else {
        return <option key={index} value={item.value}>{item.label}</option>
      }
    })

    return options
  }

  handleChange = (value, inputName) => {
    const {updateForm} = this.props

    if (value === '') {
      this.setState({
        touched: false
      })
    }
    else {
      this.setState({
        touched: true
      })
    }

    updateForm(value, inputName)
  }

  returnError = () => {
    const {inputName} = this.props
    const errorMsg = this.props.errors[inputName][0]

    return errorMsg
  }

  render() {
    const {inputName, errors, countOptions} = this.props
    const {touched} = this.state

    return (
      <div className={this.renderClassName()}>
        <select
          className={`form-control custom-select-input ${!touched ? 'greyed-out' : ''}`}
          name='text'
          onChange={e => this.handleChange(e.target.value, inputName)}>
          {!countOptions && this.renderOptions()}
          {countOptions && this.renderCountOptions()}
        </select>
        <span>
          {typeof errors === 'object' &&
          errors.hasOwnProperty(inputName) &&
            this.returnError()}
        </span>
      </div>
      )
    }
  }

  SelectInput.propTypes = {
    errors: PropTypes.object,
    inputName: PropTypes.string,
    options: PropTypes.array.isRequired,
    updateForm: PropTypes.func.isRequired,
    value: PropTypes.string
  }

  export default SelectInput
