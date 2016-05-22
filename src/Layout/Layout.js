import React from 'react'

import NavHeader from './NavHeader'

const Layout = props => {
  return (
    <div>

      <NavHeader />

      <main id="main-content">
        {props.children}
      </main>

    </div>
  )
};
export default Layout