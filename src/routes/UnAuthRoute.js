import React from 'react'
import { Route } from 'react-router'
import { replace } from 'react-router-redux'

import { store } from 'store'
import User from 'store/User'
import * as appPath from './path'
import { Preloader } from 'components'
import Layouts from 'components/Layouts'

const UnAuthRoute = ({ layout, match, path, component: Component, ...rest }) => {
  const accessHeaders = User.selectors.accessHeaders()

  if (accessHeaders) {
    store.dispatch(User.actions.validateToken())
    .then(response => store.dispatch(replace(appPath.AUTHED)))
    .catch(reject => store.dispatch(replace(match)))
  }

  return (
    <Route {...rest} render={props => (
      accessHeaders ? <Preloader /> : <Component { ...props} />
    )}/>
  )
}

export default UnAuthRoute