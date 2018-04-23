import React from 'react'

import ContactForm from 'components/ContactForm'

import './styles.sass'

const Contact = () => {
  return (
    <div className='container form-container'>
      <ContactForm showText={true} />
    </div>
  )
}

export default Contact
