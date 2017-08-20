import React from 'react'

import { Buttons } from 'components'

const AuthLayout = ({ children, signout }) =>
  <div className='main-container'>
    <h1>Auth Layout</h1>
    <Buttons.Simple onClick={signout}>Sign out</Buttons.Simple>
    {children}
  </div>

export default AuthLayout
