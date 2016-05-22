import React from 'react'
import { render } from 'react-dom'
import 'd3'

import './Style/main.scss'

import AppRouter from './AppRouter'

render(
  <AppRouter />,
  document.getElementById('app')
);