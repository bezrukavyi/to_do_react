import React from 'react'

import { Input } from 'components/fields'
import { Preloader } from 'components'

const SignInForm = (props) => {
  const { error, handleSubmit, submitting } = props

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <Input
          name='email'
          placeholder='Email'
          type='text'
        />
      </label>

      <label>
        <Input
          name='password'
          placeholder='Password'
          type='text'
        />
      </label>

      <button type='submit' disabled={submitting}>Save</button>
    </form>
  )
}

export default SignInForm
