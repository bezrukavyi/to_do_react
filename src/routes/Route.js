import React from 'react'
import { Route as ReactRoute } from 'react-router'
import Helmet from 'react-helmet'

import User from 'store/User'
import meta from './meta'

const Route = ({ path, ...rest }) => {
  User.actions.checkAuthCredentials()
  const metaInfo = meta[path]

  return (
    <div>
      <Helmet {...metaInfo} />

      <ReactRoute path={path} {...rest} />
    </div>
  )
}

export default Route
