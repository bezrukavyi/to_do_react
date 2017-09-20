import React from 'react'

import Header from './Header'

const AuthLayout = ({ children, signout }) =>
  <div className='main-container'>
    <Header onSignout={signout} />
    {children}
  </div>

export default AuthLayout
