import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotAuthorized from '../pages/messages/NotAuthorized'
import NotFound from '../pages/messages/NotFound'
import React from 'react'
import LogIn from '../pages/LogIn'
import { PrivateRoute } from './types'
import Home from '../pages/Home'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={LogIn}></Route>
                <PrivateRoute exact path='/fiscofacil/home' Component={Home}></PrivateRoute>
                <Route exact path='/unauthorized' component={NotAuthorized} />
                <Route component={NotFound}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes