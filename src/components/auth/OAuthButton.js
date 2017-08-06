import React from 'react'
import { Button } from 'components/Button'

const redirectToProvider = (provider) => {
  window.location.assign(`${process.env.REACT_APP_DOMAIN}/auth/${provider.toLowerCase()}`)
}

const OAuthButton = ({ provider }) => {
  return (
    <Button onClick={() => redirectToProvider(provider)} className="main-btn black-btn btn-icon-left dashboard-btn">
      <span className="icon icon-person"></span>
      <span className="button-text">{ provider }</span>
    </Button>
  )
}

export default OAuthButton
