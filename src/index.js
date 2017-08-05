import React from 'react'
import ReactDOM from 'react-dom'

import { history, store } from 'store'
import App from 'App'
import registerServiceWorker from 'registerServiceWorker'

import 'styles/dist/styles/App.css'

ReactDOM.render(
  <App
    store={store}
    history={history}
  />,

  document.getElementById('root')
)

registerServiceWorker()
