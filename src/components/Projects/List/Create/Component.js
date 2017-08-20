import React from 'react'

import { Buttons, Fields } from 'components'

const Create = ({ handleSubmit, error, submitting }) =>
  <form className='project__form' onSubmit={handleSubmit}>
    <div>
      <Fields.Input name='title' type='text' placeholder='title' />

      <Buttons.Form type='submit' loading={submitting} text='Create project' />
    </div>
  </form>

export default Create
