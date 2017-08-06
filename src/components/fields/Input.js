import React from 'react'
import { Field } from 'redux-form'

const Input = ({ input, meta, className, placeholder, type }) => (
  <div className='form-group'>
    <input
      {...input}
      type={type}
      className={className || 'form-control input__form'}
      placeholder={placeholder}
    />

    { meta.error && <span>{ meta.error }</span> }
  </div>
)

const InputWrapper = (props) => (
  <Field {...props} component={Input} />
)

export default InputWrapper
