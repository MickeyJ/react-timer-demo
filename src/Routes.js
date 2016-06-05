import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Layout from './Layout/Layout'
import HomePage from './Pages/Home.js'
import AboutPage from './Pages/About.js'

const Routes = () =>(
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route path="/" component={HomePage}/>
      <Route path="/about" component={AboutPage}/>
    </Route>
  </Router>
);

export default Routes