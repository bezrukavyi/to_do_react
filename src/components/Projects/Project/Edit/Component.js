import React from 'react'

import { Buttons, Fields } from 'components'

const Edit = ({ handleSubmit, error, submitting }) =>
  <form className='project__create-form' onSubmit={handleSubmit}>
    <div className='project__field'>
      <Fields.Input name='title' type='text' placeholder='title' />

      <Buttons.Form type='submit' loading={submitting} className='project__nav-button' text='Save project' />
    </div>
  </form>

export default Edit
