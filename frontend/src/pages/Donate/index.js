import React, { Component } from 'react'
import {Elements} from 'react-stripe-elements'
import ReactGA from 'react-ga'

// form component
import StripeForm from './StripeForm'
import ContactBlurb from 'components/ContactBlurb'
import DonationProgressBar from 'components/DonationProgressBar'

// stylesheet
import './styles.sass'

class Donate extends Component {
  componentDidMount() {
   ReactGA.pageview(window.location.pathname + window.location.search)
  }

  render() {
    return (
      <div className='form-container container donate-form-container'>
        <h5>Hi Neighbor!</h5>

        <p>
          <b>
            Because this is such a grand event, we are asking for donations from each household to fund this action-packed day. <br/> We are requesting a minimum donation of $25 for a group of 2, $50 for a group of 4, and $100 for a group of 8. <br />Every donation is appreciated!
          </b>
        </p>

        <p>
          We are looking for additional support through sponsors (donations of $150 or more) and gifts that will be utilized at our giveaway. Contact us on the contact page for more details. This year has a tier reward system for sponsors with many great incentives!
        </p>

        <p>
          We look forward to seeing everyone at the annual Harvest 4th of July Extravaganza!
          Thank you in advance for all the support.
        </p>

        <ContactBlurb />
        <DonationProgressBar textColor='#212529' />
        <Elements>
          <StripeForm />
        </Elements>
      </div>
    )
  }
}

export default Donate
