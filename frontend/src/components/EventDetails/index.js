import React, { Component } from 'react'

// components
import Timeline from './Timeline'

// stylesheet(s)
import './styles.sass'

class EventDetails extends Component {
  render() {
    return (
      <section id='details'>
        <h2>Event Details</h2>
        <Timeline />
      </section>
    )
  }
}

export default EventDetails
