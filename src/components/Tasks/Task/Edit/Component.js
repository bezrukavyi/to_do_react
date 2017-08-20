import React from 'react'

import { Buttons, Fields } from 'components'

const Edit = ({ handleSubmit, error, submitting }) =>
  <form className='task__create-form' onSubmit={handleSubmit}>
    <div className='task__field'>
      <Fields.Input name='title' type='text' placeholder='title' />

      <Buttons.Form type='submit' loading={submitting} text='Update task' />
    </div>
  </form>

export default Edit
