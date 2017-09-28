import React from 'react'
import {render} from 'react-dom'

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'

import multi from 'redux-multi'
import promise from 'redux-promise'
import thunk from 'redux-thunk'

import App from './main/app'
import reducers from './main/reducers'
const store = applyMiddleware(multi, promise, thunk)(createStore)(reducers)
render(
    <Provider store={store}>
        <App /> 
    </Provider>
, document.getElementById('app'))