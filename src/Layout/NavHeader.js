import React, { Component } from 'react'

import NavLink from './NavLink'

const NavHeader = () =>(
  <div id="nav-header">

    <header>
      <h1>React Demo</h1>
    </header>

    <nav>
      <NavLink to="/">
        <span>Home</span>
      </NavLink>
      
      <span> | </span>
      
      <NavLink to="/about">
        <span>About</span>
      </NavLink>
    </nav>

  </div>
);





export default NavHeader