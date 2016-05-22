import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Layout from './Layout/Layout'
import HomeComponent from './Pages/Home.js'
import AboutComponent from './Pages/About.js'

const AppRouter = () =>(
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route path="/" component={HomeComponent}/>
      <Route path="/about" component={AboutComponent}/>
    </Route>
  </Router>
);

export default AppRouter