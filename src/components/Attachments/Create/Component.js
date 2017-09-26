import React from 'react'
import { Field } from 'redux-form'

import { Buttons, Fields } from 'components'

const Create = ({ handleSubmit, error, submitting }) =>
  <form className='attachment__form' onSubmit={handleSubmit}>
    <div className='entity__field'>
      <Fields.Input name='name' type='text' placeholder='name' />
      <Fields.FileInput name='file' type='file' placeholder='file' />

      <Buttons.Form type='submit' className='entity__nav-button' loading={submitting} text='Create attachment' />
    </div>
  </form>

export default Create
