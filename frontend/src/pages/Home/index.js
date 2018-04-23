import React, { Component } from 'react'
import smoothScroll from 'smoothscroll'

// components
import EventDetails from 'components/EventDetails'
import ContactForm from 'components/ContactForm'

// style(s)
import './styles.sass'

class Home extends Component {
  componentDidMount() {
    const {hash} = this.props.location

    if (hash === '#details') {
      smoothScroll(document.querySelector('#details'))
    }
  }

  componentDidUpdate(prevProps) {
    const {hash} = this.props.location

    if (hash === '#details') {
      smoothScroll(document.querySelector('#details'))
    }
  }

  render() {
    return (
      <section className='home_page_container'>
        <EventDetails />
        <div className='container contact-wrapper'>
          <h2>Contact Us!</h2>
          <ContactForm />
        </div>
      </section>
    )
  }
}

export default Home
