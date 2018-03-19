import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SelectInput extends Component {
  state = {
    touched: false
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

  render() {
    const {inputName} = this.props
    const {touched} = this.state

    return (
      <select
        className={`form-control custom-select-input ${!touched ? 'greyed-out' : ''}`}
        name='text'
        onChange={e => this.handleChange(e.target.value, inputName)}
        >
          {this.renderOptions()}
        </select>
      )
    }
  }

  SelectInput.propTypes = {
    // proptypes go here
  }

  export default SelectInput
