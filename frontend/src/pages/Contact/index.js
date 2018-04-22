import React from 'react'

import ContactForm from 'components/ContactForm'

import './styles.sass'

const Contact = () => {
  return (
    <div className='container'>
      <div className="sub-header-container">
        <p>
          If you need to modify any of your responses or have any questions, please send us a message!
        </p>
      </div>
      <ContactForm />
    </div>
  )
}

export default Contact
