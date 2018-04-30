import React from 'react'
import ReactGA from 'react-ga'

// components
import ContactForm from 'components/ContactForm'

import './styles.sass'

const Contact = () => {
  ReactGA.pageview(window.location.pathname + window.location.search)

  return (
    <div className='container form-container'>
      <p> Interested in becoming a sponsor or donating a gift for our giveaway? Contact us here! </p>
      <ContactForm showText={true} />
    </div>
  )
}

export default Contact
