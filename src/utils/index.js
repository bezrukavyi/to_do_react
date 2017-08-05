import dotProp from 'dot-prop-immutable'
import { toastr } from 'react-redux-toastr'
import { SubmissionError } from 'redux-form'

import { store } from 'store'
import { toastrDefaultOptions } from 'settings/toastr'

export const response_error = (reject) => {
  return dotProp.get(reject, 'response.data.errors') || reject.message || reject
}

export const join = (value) => {
  return Array.isArray(value) ? value.join(', ') : value
}

export const messageSuccess = (message) =>
  toastr.success(message, toastrDefaultOptions())

export const messageError = (reject) => {
  const message = join(response_error(reject))
  toastr.error(message, toastrDefaultOptions())
}

export const formSuccess = (message) =>
  messageSuccess(message)

export const formError = (reject) => {
  if (reject['form']) {
    throw new SubmissionError(response_error(reject['form']))
  }
}
