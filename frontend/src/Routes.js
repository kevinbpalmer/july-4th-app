import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// pages to render
import Home from 'pages/Home'
import Rsvp from 'pages/Rsvp'
import Cornhole from 'pages/Cornhole'
import Volunteers from 'pages/Volunteers'

// components to render
import Header from 'components/Header'
import Footer from 'components/Footer'
import Hero from 'components/Hero'

class Routes extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  componentDidUpdate() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <main>
        <Header />
        <Hero />
        <Switch>
          <Route exact path='/' component={Home} />

          <Route path='/rsvp' component={Rsvp} />
          <Route path='/cornhole' component={Cornhole} />
          <Route path='/volunteer' component={Volunteers}/>
          <Route path='/potluck' render={() => ( <h1>potluck</h1> )} />


          <Route component={Home}/>
        </Switch>
        <Footer />
      </main>
    )
  }
}

Routes.propTypes = {
  // proptypes go here
};

export default Routes
