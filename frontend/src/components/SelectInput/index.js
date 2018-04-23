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
    const {inputName, errors} = this.props
    const {touched} = this.state

    return (
      <div className={this.renderClassName()}>
        <select
          className={`form-control custom-select-input ${!touched ? 'greyed-out' : ''}`}
          name='text'
          onChange={e => this.handleChange(e.target.value, inputName)}>
          {this.renderOptions()}
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
    inputName: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    updateForm: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
  }

  export default SelectInput
