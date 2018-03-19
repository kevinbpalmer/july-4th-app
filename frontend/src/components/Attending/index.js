import React, { Component } from 'react'
import PropTypes from 'prop-types'

// stylesheet
import './styles.sass'

class Attending extends Component {
  handleChange = (value, inputName) => {
    const {updateForm} = this.props

    updateForm(value, inputName)
  }

  render() {
    const {inputName, value, label} = this.props

    return (
      <div className='attending-wrapper'>
        <div className='attending-container'>
          <label className='attending-label'>{label}</label>
          <div className='switch-wrapper'>
            <label className='switch'>
              <input type='checkbox' onChange={e => this.handleChange(e.target.checked, inputName)} checked={value} />
              <span className='slider'></span>
            </label>
            <span>
              {value === true ? 'Yes' : 'No'}
            </span>
          </div>
        </div>
      </div>
    )
  }
}

Attending.propTypes = {
  inputName: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  updateForm: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

export default Attending
