import React from 'react'

const TextInput = ({value, updateForm, inputName, placeholder}) => {
  return (
    <input
      className='form-control custom-input'
      type='text'
      value={value}
      placeholder={placeholder}
      onChange={e => updateForm(e.target.value, inputName)}
    />
  )
}

export default TextInput
