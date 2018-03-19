import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {
  renderClassName = () => {
    const {errors, inputName} = this.props

    if (typeof errors === 'object' && errors.hasOwnProperty(inputName)) {

      return 'has-error input-wrapper'
    }


    return 'no-error input-wrapper'
  }

  returnError = () => {
    const {inputName} = this.props
    const errorMsg = this.props.errors[inputName][0]

    return errorMsg
  }

   render() {
     const {value, updateForm, inputName, placeholder, number, errors} = this.props

      return (
        <div className={this.renderClassName()}>
          <input
            className='form-control custom-input'
            type={`${number ? 'number' : 'text'}`}
            value={value}
            placeholder={placeholder}
            onChange={e => updateForm(e.target.value, inputName)}
          />
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
  // proptypes go here
};

export default TextInput
