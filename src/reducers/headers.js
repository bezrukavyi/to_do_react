import cookies from 'js-cookie'
import { forIn, pickBy, isEmpty, transform } from 'lodash'

import { url_param } from 'utils'

const names = [
  'access-token',
  'client',
  'uid'
]

const set_cookies = (state) => {
  forIn(state, (value, key) => {
    cookies.set(key, value)
  })
}

const initialState = () => {
  const callback = (state, key) => {
    return state[key] = url_param(key, true) || cookies.get(key)
  }

  const headers = transform(names, callback, {})
  return pickBy(headers, (value) => (value && value !== 'null'))
}

const headers = (state = initialState(), { meta }) => {
  const headers = pickBy(meta, (value, key) => names.includes(key))

  if (headers && !isEmpty(headers)) {
    set_cookies(headers)
    return headers
  }

  set_cookies(state)
  return state
}

export default headers
