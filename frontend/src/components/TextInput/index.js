import React from 'react'

const TextInput = ({value, updateForm, inputName, placeholder, number}) => {
  return (
    <input
      className='form-control custom-input'
      type={`${number ? 'number' : 'text'}`}
      value={value}
      placeholder={placeholder}
      onChange={e => updateForm(e.target.value, inputName)}
    />
  )
}

export default TextInput
