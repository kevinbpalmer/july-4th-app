import React from 'react'
import {Link} from 'react-router-dom'

// stylesheet
import './styles.sass'

const Footer = () => {
  return (
    <div className='footer-main'>
      <ul>
        <li>
          <Link to='/#details'>
            Details
          </Link>
        </li>
        <li>
          <Link to='/rsvp'>
            RSVP
          </Link>
        </li>
        <li>
          <Link to=''>
            Donate
          </Link>
        </li>
        <li>
          <Link to='/volunteer'>
            Volunteer
          </Link>
        </li>
        <li>
          <Link to='/potluck'>
            Potluck
          </Link>
        </li>
        <li>
          <Link to='/cornhole'>
            Cornhole
          </Link>
        </li>
      </ul>
      <p>
        Built by: <a href='mailto: kevin.bradley.palmer@gmail.com'>Kevin Palmer</a>
      </p>
    </div>
  )
}

export default Footer
