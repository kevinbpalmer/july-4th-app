import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TextInput extends Component {
  renderClassName = () => {
    const {errors, inputName} = this.props

    if (typeof errors === 'object' && errors.hasOwnProperty(inputName) && typeof errors[inputName] !== 'undefined') {

      return 'has-error input-wrapper'
    }

    return 'no-error input-wrapper'
  }

  returnError = () => {
    const {inputName, errors} = this.props
    if (errors[inputName]) {
      const errorMsg = errors[inputName][0]

      return errorMsg
    }
  }

  handleTextAreaChange = e => {
    const {updateForm, inputName} = this.props

    updateForm(e.target.value, inputName)
  }

   render() {
     const {value, updateForm, inputName, placeholder, number, errors, textArea} = this.props

      return (
        <div className={this.renderClassName()}>
          {textArea === true ?
            <textarea
              value={value}
              onChange={e => this.handleTextAreaChange(e)}
              placeholder={placeholder}
              rows='6'
            />
            :
            <input
              className='form-control custom-input'
              type={`${number ? 'number' : 'text'}`}
              value={value}
              placeholder={placeholder}
              onChange={e => updateForm(e.target.value, inputName)}
            />
          }

          <span>
            {typeof errors === 'object' &&
            errors.hasOwnProperty(inputName) &&
              this.returnError()}
          </span>
        </div>
      )
   }
}

TextInput.propTypes = {
  errors: PropTypes.object,
  inputName: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  updateForm: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default TextInput
