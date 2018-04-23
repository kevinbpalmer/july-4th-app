import React, { Component } from 'react'
import {Elements} from 'react-stripe-elements'

// form component
import StripeForm from './StripeForm'
import ContactBlurb from 'components/ContactBlurb'

// stylesheet
import './styles.sass'

class Donate extends Component {
  render() {
    return (
      <div className='form-container container'>
        <p>Hi Neighbor!</p>

        <p>
          Planning for the Harvest 4th of July Extravaganza is in full swing! This event will take place on Saturday, June 30th. Activities will include*: a parade, shaved ice truck, various children's activities, cornhole tournament, inflatable obstacle course, hot dog lunch, kegs, potluck dinner, photo booth, live band, a spectacular firework show, and more. It will be an event you and your family won’t want to miss! (*funds permitting)
        </p>

        <p>
          Because this is such a grand event, we are asking for donations from each household to fund this action-packed day. We are requesting a minimum donation of $25 for a group of 2, $50 for a group of 4, and $100 for a group of 8. Every donation is appreciated!
        </p>

        <p>
          We are looking for additional support through sponsors (donations of $150 or more) and gifts that will be utilized at our giveaway. Contact us on the contact page for more details. This year has a tier reward system for sponsors with many great incentives!
        </p>

        <p>
          We look forward to seeing everyone at the annual Harvest 4th of July Extravaganza!
          Thank you in advance for all the support.
        </p>

        <ContactBlurb />
        <Elements>
          <StripeForm />
        </Elements>
      </div>
    )
  }
}

export default Donate
