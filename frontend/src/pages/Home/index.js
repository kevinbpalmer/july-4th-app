import React, { Component } from 'react'
import smoothScroll from 'smoothscroll'
import ReactGA from 'react-ga'

// components
import EventDetails from 'components/EventDetails'
import ContactForm from 'components/ContactForm'
import Sponsors from 'components/Sponsors'

// style(s)
import './styles.sass'

class Home extends Component {
  componentDidMount() {
    const {hash} = this.props.location

    if (hash === '#details') {
      smoothScroll(document.querySelector('#details'))
    }
    ReactGA.pageview(window.location.pathname + window.location.search)
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
        <Sponsors />
      </section>
    )
  }
}

export default Home
