import React from 'react'

import { SignInFormContainer as SignInForm } from 'containers/auth'
import { OAuthButton } from 'components/auth'

const SignIn = () =>
    <div>
      <h2>Sign In</h2>
      <SignInForm />
      <OAuthButton provider='github' />
    </div>

export default SignIn
