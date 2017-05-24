import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers'
import App from './containers/App.js'


import lodash from 'lodash'
window.lodash = lodash;
window._ = lodash;


const store = createStore(reducers)



ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);




