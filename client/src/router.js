import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Condos from './Components/Condos/condos'
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
    <Route component={SearchCondos} path="/search-condos/:query"/>
    <Route component={Room} path="/room/:id"/>
    <Route component={Host} path="/host"/>
    <Route component={Create} path="/create"/>
    <Route component={Update} path="/update"/>
    <Route component={Register} path="/register"/>
    <Route component={Login} path="/login"/>
  </Switch>
)
