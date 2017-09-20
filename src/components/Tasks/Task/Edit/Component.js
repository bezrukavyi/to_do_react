import React from 'react'

import { Buttons, Fields } from 'components'

const Edit = ({ handleSubmit, error, submitting, children }) =>
  <form className='task__create-form' onSubmit={handleSubmit}>
    <div className='entity__field'>
      <Fields.Input name='title' type='text' placeholder='title' />

      <div className='task__edit-tools'>
        <Buttons.Form type='submit' className='entity__nav-button' loading={submitting} text='Save' />
        { children }
      </div>
    </div>
  </form>

export default Edit
