import React from 'react'

import { Buttons } from 'components'

const Header = ({ onSignout }) =>
  <div className='header__auth'>
    <h1>Auth Layout</h1>
    <Buttons.Simple onClick={onSignout}>Sign out</Buttons.Simple>
  </div>

export default Header
