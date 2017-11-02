import React from 'react'

import { Buttons } from 'components'
import { NavLink } from 'react-router-dom'
import * as Path from 'constants/Path'
import User from 'components/User'

const Auth = ({ children }) =>
  <div className='main-container'>
    <h1>DASHBOARD Layout</h1>
    <User.SignOutButton />
    <Buttons.Simple className='create' as={NavLink} to={Path.UPDATE_PASSWORD}>Update Password</Buttons.Simple>
    <Buttons.Simple className='create' as={NavLink} to={Path.DASHBOARD}>Dashboard</Buttons.Simple>
    {children}
  </div>

export default Auth
