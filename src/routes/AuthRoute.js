import React from 'react'
import { Route } from 'react-router'

import { store, history } from 'store'
import { messageError } from 'utils'
import { validateToken } from 'actions/auth'
import * as appPath from 'constants/path'
import { Layout, Preloader } from 'components'

const redirectForAuthed = () => {
  history.push(appPath.PROJECTS)
  messageError('You already authed')
}

const AuthRoute = ({ match, path, component: Component, accessForAuthed = true, ...rest }) => {
  let user = store.getState().user

  if (user && !accessForAuthed) {
    redirectForAuthed()
  }

  if (!user) {
    store.dispatch(validateToken())
    .then(response => {
      accessForAuthed ? history.push(match) : redirectForAuthed()
    })
    .catch(reject => {
      if (accessForAuthed) {
        history.push(appPath.ROOT)
        messageError(reject)
      }
    })
  }

  return (
    <Route {...rest} render={props => (
      user
      ? <Component { ...props} />
      : accessForAuthed ? <Preloader /> : <Component { ...props} />
    )}/>
  )
}

export default AuthRoute
