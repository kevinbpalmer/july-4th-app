import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'

// style(s)
import './styles.sass'

class Hero extends Component {
  state = {
    height: 0
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions = () => {
    this.setState({
      height: window.innerHeight
    })
  }

  render() {
    const {height} = this.state
    const {location} = this.props

    if (location.pathname !== '/') {
      return (
          <div
            className='hero-content-wrapper childpage-hero'
            style={{
              minHeight: (height/4) + 'px'
            }}>
            <div className='hero-content-container'>
              <h1 className='hero-title'>
                {location.pathname.slice(1)}
              </h1>
          </div>
        </div>
      )
    }



    return (
        <div
          className='hero-content-wrapper'
          style={{
            minHeight: height + 'px'
          }}>
          <div className='hero-content-container'>
            <h1 className='hero-title'>
              Harvest Fourth of July Extravaganza
            </h1>
            <h5 className='hero-subtitle'>
              Saturday, June 30th, 2018
            </h5>
            <div className='hero-button-container'>
              <Link to='/rsvp'>
              <button type='button' className='hero-btn mr-4 btn'>RSVP</button>
            </Link>
            <button type='button' className='hero-btn btn'>Donate</button>
          </div>
        </div>
        <div className='scroll-for-details'>
          <Link to='/#details'>
            <p>Scroll for details</p>
            <div className='double-caret'><span>&or;</span></div>
          </Link>
        </div>
      </div>
    )
  }
}

export default withRouter(Hero)
