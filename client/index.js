import React from 'react'
import {render} from 'react-dom'
import {Router, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'

import route from './routes'

const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk) // applyMiddleware- by redux;
  // thunk- allows to dispacth unsynchronous
)

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={route}/>
  </Provider>,
   document.getElementById('app'));
