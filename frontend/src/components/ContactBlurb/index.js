import React from 'react'
import {Link} from 'react-router-dom'

const ContactBlurb = () => {
  return (
    <p
      style={{
        marginBottom: '1.5rem'
      }}>
      If you need to modify your response, please send us a message on the <Link to='/contact'>contact page</Link>.
    </p>
  )
}

export default ContactBlurb
