import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
// import registerServiceWorker from './registerServiceWorker';

// import redux store
import createStore from './createStore';

// stylesheet(s)
import 'styles/globals.sass'

ReactDOM.render(
  <Provider store={createStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'))
// registerServiceWorker();
