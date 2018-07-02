import React from 'react'
import ReactGA from 'react-ga'

// components
import ContactForm from 'components/ContactForm'

import './styles.sass'

const Contact = () => {
  ReactGA.pageview(window.location.pathname + window.location.search)

  return (
    <div className='container form-container'>
      <ContactForm showText={true} />
    </div>
  )
}

export default Contact
