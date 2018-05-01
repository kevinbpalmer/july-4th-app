import React from 'react'
import ReactGA from 'react-ga'

// components
import ContactForm from 'components/ContactForm'

import './styles.sass'

const Contact = () => {
  ReactGA.pageview(window.location.pathname + window.location.search)

  return (
    <div className='container form-container'>
      <p>We are looking for additional support through sponsors (donations of $150 or more) and gifts that will be utilized at our giveaway. This year has a tier reward system for sponsors with many great incentives! Contact us here!</p>
      <ContactForm showText={true} />
    </div>
  )
}

export default Contact
