import React from 'react'
import { render } from 'react-dom'

import './Style/main.scss'

import Routes from './Routes'

render(
  <Routes />,
  document.getElementById('app')
);