import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

// image(s)
import bgImg from './images/home_bg.jpeg'

// style(s)
import './styles.sass'

class Home extends Component {
  render() {
    console.log('Ayy: ', this.props);

    return (
      <section className='home_page_container'>

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
