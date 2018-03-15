import React, { Component } from 'react'
import PropTypes from 'prop-types'

// style(s)
import './styles.sass'

class Hero extends Component {
  render() {
    return (
      <div className='hero-content-container'>
        <h1 className='hero-title'>
          Harvest Fourth of July Extravaganza
        </h1>
        <h5 className='hero-subtitle'>
          Saturday, June 30th, 2018
        </h5>
      </div>
    )
  }
}

Hero.propTypes = {
  // proptypes go here
};

export default Hero
