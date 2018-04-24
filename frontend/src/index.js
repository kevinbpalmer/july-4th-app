// polyfills
import 'classlist-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {StripeProvider} from 'react-stripe-elements'
// import registerServiceWorker from './registerServiceWorker';

// import redux store
import createStore from './createStore';

// stylesheet(s)
import 'styles/globals.sass'

ReactDOM.render(
  <StripeProvider apiKey="pk_test_eXjXV9xyhM7b4Zkcz8a0xP8k">
    <Provider store={createStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StripeProvider>,
  document.getElementById('root'))
  // registerServiceWorker();
