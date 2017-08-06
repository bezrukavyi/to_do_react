import React from 'react'

import { Input, DatePicker } from 'components/fields'
import { Preloader } from 'components'

const ProjectForm = (props) => {
  const { error, handleSubmit, submitting } = props

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <Input
          name='title'
          placeholder='Title'
          type='text'
        />
      </label>

      <label>
        <DatePicker
          name='complete_at'
          placeholder='Complete at'
        />
      </label>

      <button type='submit' disabled={submitting}>Save</button>
    </form>
  )
}

export default ProjectForm
