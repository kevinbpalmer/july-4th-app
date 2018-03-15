import React from 'react'
import { Switch, Route } from 'react-router-dom'

// pages to render
import Home from 'pages/Home'

// components to render
import Header from 'components/Header'

const Routes = () => {
  return (
    <main>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />

        <Route path='/rsvp' render={() => ( <h1>rsvp</h1> )} />
        <Route path='/event-details' render={() => ( <h1>event-details</h1> )} />
        <Route path='/cornhole' render={() => ( <h1>cornhole</h1> )} />
        <Route path='/volunteer' render={() => ( <h1>volunteer</h1> )} />
        <Route path='/potluck' render={() => ( <h1>potluck</h1> )} />

        <Route component={Home}/>
      </Switch>
    </main>
  )
}

export default Routes
