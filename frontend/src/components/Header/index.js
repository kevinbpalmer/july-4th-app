import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

// style(s)
import './styles.sass'

class Header extends Component {
  render() {
    return (
      <nav className='nav-main'>
        <ul>
          <li>
            <Link to='/rsvp'>RSVP</Link>
          </li>
          <li>
            <Link to='/event-details'>Details</Link>
          </li>
          <li>
            <Link to='/cornhole'>Cornhole</Link>
          </li>
          <li>
            <Link to='/volunteer'>Volunteer</Link>
          </li>
          <li>
            <Link to='Potluck'>Potluck</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

Header.propTypes = {
  // proptypes go here
}

export default Header
