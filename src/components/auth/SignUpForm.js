import React from 'react'

import { Input } from 'components/fields'
import { Preloader } from 'components'

const SignUp = (props) => {
  const { error, handleSubmit, submitting } = props

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <Input
          name='full_name'
          placeholder='Full name'
          type='text'
        />
      </label>

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

      <label>
        <Input
          name='password_confirmation'
          placeholder='Password confirmation'
          type='text'
        />
      </label>

      <button type='submit' disabled={submitting}>Save</button>
    </form>
  )
}

export default SignUp
