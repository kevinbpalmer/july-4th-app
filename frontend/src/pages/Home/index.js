import React, { Component } from 'react'
import smoothScroll from 'smoothscroll'

// components
import EventDetails from 'components/EventDetails'

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
      </section>
    )
  }
}

export default Home
