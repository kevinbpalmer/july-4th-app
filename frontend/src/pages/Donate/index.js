import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Elements} from 'react-stripe-elements'

// form component
import StripeForm from './StripeForm'

// stylesheet
import './styles.sass'

class Donate extends Component {

  render() {
    return (
      <div className="donate-form-wrapper">
        <Elements>
          <StripeForm
            handleBlur={this.handleBlur}
            handleFocus={this.handleFocus}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </Elements>
      </div>
    )
  }
}

Donate.propTypes = {
  // proptypes go here
}

export default Donate
