import React from 'react'
import { Route } from 'react-router'

import { store, history } from 'store'
import { messageError } from 'utils'
import { validateToken } from 'actions/auth'
import { SIGN_IN_PATH } from 'constants/path'
import { Layout, Preloader } from 'components'

const AuthRoute = ({ path, component: Component, ...rest }) => {
  if (!store.getState().user) {
    store.dispatch(validateToken())
    .then(response => history.push(path))
    .catch(reject => {
      history.push(SIGN_IN_PATH)
      messageError(reject)
    })
  }

  return (
    <Route {...rest} render={props => (
      store.getState().user
      ? <Component { ...props} />
      : <Preloader />
    )}/>
  )
}

export default AuthRoute
