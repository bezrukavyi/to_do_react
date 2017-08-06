import React from 'react'

import { SignUpFormContainer as SignUpForm } from 'containers/auth'
import { OAuthButton } from 'components/auth'

const SignUp = () =>
    <div>
      <h2>Sign In</h2>
      <SignUpForm />
      <OAuthButton provider='github' />
    </div>

export default SignUp
