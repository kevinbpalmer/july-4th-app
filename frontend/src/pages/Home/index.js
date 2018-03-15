import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

// components
import Hero from 'components/Hero'

// style(s)
import './styles.sass'

class Home extends Component {
  render() {
    return (
      <section className='home_page_container'>
        <Hero />
      </section>
    )
  }
}

Home.propTypes = {
  // proptypes go here
}

const mapStateToProps = (store) => ({

});

const mapDispatchToProps = {

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
