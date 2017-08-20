import React from 'react'

import { Buttons, Fields } from 'components'

const Create = ({ handleSubmit, error, submitting }) =>
  <form className='task__form' onSubmit={handleSubmit}>
    <div className='task__field'>
      <Fields.Input name='title' type='text' placeholder='title' />

      <Buttons.Form type='submit' loading={submitting} text='Create task' />
    </div>
  </form>

export default Create
