import React from 'react'
import {render} from 'react-dom'

import App from './main/app'

import {dialog} from 'electron'
render(
    <App /> 
, document.getElementById('app'))