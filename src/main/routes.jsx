import React from 'react'
import {Route, Switch, Redirect} from 'react-router'
import {HashRouter} from 'react-router-dom'
import Home from '../home/home'
import About from '../about/about'
import Header from '../templates/header'
export default props =>(
    <HashRouter>
        <div>
            <Header></Header>
            <Switch>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Redirect from='*' to='/home'/>
            </Switch>
        </div>
    </HashRouter>   
)

