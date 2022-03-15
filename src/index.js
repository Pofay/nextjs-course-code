import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App'
import { MeetupsContextProvider } from './store/meetups-context'

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}

ReactDOM.render(
  <MeetupsContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MeetupsContextProvider>,
  document.getElementById('root')
)
