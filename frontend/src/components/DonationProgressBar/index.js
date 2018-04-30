import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

// styles
import './styles.sass'

class DonationProgressBar extends Component {
  state = {
    amount: undefined
  }

  componentDidMount() {
    this.fetchAmount()
  }

  fetchAmount = () => {
    return new Promise((resolve, reject) => {
      axios.get('/api/v1/payments')
      .then(res => {
        console.log('Got amounts back')
      })
      .catch(err => {
        console.error('Failed to fetch amount', err)
      })
    })
  }

  render() {
    return (
      <div>
        <h1>This is the DonationProgressBar Component</h1>
      </div>
    )
  }
}

DonationProgressBar.propTypes = {
  // proptypes go here
}

export default DonationProgressBar
