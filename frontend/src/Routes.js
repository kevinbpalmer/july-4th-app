import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

// pages to render
import Home from 'pages/Home'
import Rsvp from 'pages/Rsvp'

// components to render
import Header from 'components/Header'
import Footer from 'components/Footer'
import Hero from 'components/Hero'

// modal must be global so we render it here
import Donate from 'components/Donate'

// actions
import {openModal} from 'actions/globals'

class Routes extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  componentDidUpdate() {
    window.scrollTo(0, 0)
  }

  render() {
    const {isModalOpen, openModal} = this.props

    return (
      <main>
        <Header />
        <Hero />
        <Switch>
          <Route exact path='/' component={Home} />

          <Route path='/rsvp' component={Rsvp} />
          <Route path='/cornhole' render={() => ( <h1>cornhole</h1> )} />
          <Route path='/volunteer' render={() => ( <h1>volunteer</h1> )} />
          <Route path='/potluck' render={() => ( <h1>potluck</h1> )} />

          <Route component={Home}/>
        </Switch>
        <Footer />
        <Donate isModalOpen={isModalOpen} hideModal={openModal} />
      </main>
    )
  }
}

Routes.propTypes = {
  // proptypes go here
};

const mapStateToProps = store => ({
  isModalOpen: store.globals.isModalOpen
})

const mapDispatchToProps = {
  openModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
