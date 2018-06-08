import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

// actions
import {updateProgressBar} from 'actions/donate'

// styles
import './styles.sass'

class DonationProgressBar extends Component {
  state = {
    amount: undefined,
    percentage: 0
  }

  componentDidMount() {
    this.fetchAmount()
  }

  componentDidUpdate(prevProps, prevState) {
    const {amount} = this.state
    const {shouldUpdateProgressBar} = this.props

    if (prevState.amount !== amount) {
      this.setState({
        percentage: ((amount/8000)*100).toFixed(2)
      })
    }

    if (shouldUpdateProgressBar === true) {
      this.fetchAmount()
    }
  }

  fetchAmount = () => {
    const {updateProgressBar} = this.props;

    axios.get('/api/v1/payment')
    .then(res => {
      process.env.REACT_APP_DEBUG && console.log('Got amounts back: ', res)
      this.setState({
        amount: res.data.dollar_amount
      })
      updateProgressBar(false)
    })
    .catch(err => {
      updateProgressBar(false)
      process.env.REACT_APP_DEBUG && console.error('Failed to fetch amount', err)
    })
  }

  render() {
    const {amount, percentage} = this.state

    if (!amount) {
      return null
    }

    return (
      <div  className='progressbar-container'>
        <div style={{ color: this.props.textColor ? this.props.textColor : '#fff' }} className='amount-wrapper'>
          <h4>${amount}</h4> <span>/</span> <h4>$8000</h4> <span>Raised</span>
        </div>
        <div className='progress'>
          <div
            className='progress-bar'
            role='progressbar'
            aria-valuenow={`${percentage}`}
            aria-valuemin='0' aria-valuemax='100'
            style={{
              width: `${percentage}%`,
              backgroundColor: '#00203B'
            }}>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  shouldUpdateProgressBar: store.donate.shouldUpdateProgressBar
})

const mapDispatchToProps = {
  updateProgressBar
}

export default connect(mapStateToProps, mapDispatchToProps)(DonationProgressBar)
