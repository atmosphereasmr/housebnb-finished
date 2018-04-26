import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Components/Header/header'
import Condos from './Components/Condos/condos'
import Footer from './Components/Footer/footer'
import Home from './Components/Home/home'
import SearchCondos from './Components/SearchCondos/searchcondos'
import Room from './Components/Room/room'
import Host from './Components/Host/host.js'
import Create from './Components/Create/create.js'
import Update from './Components/Update/update.js'
import Register from './Components/Register/register.js'
import Login from './Components/Log In/login.js'

export default (
  <Switch>
    <Route component={Condos} path="/" exact/>
    <Route component={SearchCondos} path="/search-condos"/>
    <Route component={Room} path="/room/:id"/>
    <Route component={Host} path="/host/:id"/>
    <Route component={Create} path="/create"/>
    <Route component={Update} path="/update"/>
    <Route component={Register} path="/register"/>
    <Route component={Login} path="/login"/>
  </Switch>
)
