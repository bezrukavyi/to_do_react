import React from 'react'

import { Buttons, Fields } from 'components'

const Edit = ({ handleSubmit, error, submitting }) =>
  <form className='task__create-form' onSubmit={handleSubmit}>
    <div className='project__field'>
      <Fields.Input name='title' type='text' placeholder='title' />

      <Buttons.Form type='submit' className='project__nav-button' loading={submitting} text='Save' />
    </div>
  </form>

export default Edit
