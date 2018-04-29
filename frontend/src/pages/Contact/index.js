import React from 'react'

import ContactForm from 'components/ContactForm'

import './styles.sass'

const Contact = () => {
  return (
    <div className='container form-container'>
      <p> Interested in becoming a sponsor or donating a gift for our giveaway? Contact us here! </p>
      <ContactForm showText={true} />
    </div>
  )
}

export default Contact
