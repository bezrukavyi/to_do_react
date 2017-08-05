import cookies from 'js-cookie'
import { forIn, pickBy, isEmpty, transform } from 'lodash'

const names = [
  'access-token',
  'client',
  'uid'
]

const initialState = () => {
  const callback = (state, key) => {
    return state[key] = cookies.get(key)
  }

  const headers = transform(names, callback, {})
  return pickBy(headers, (value) => (value && value !== 'null'))
}

const headers = (state = initialState(), { meta }) => {
  const headers = pickBy(meta, (value, key) => names.includes(key))

  forIn(headers, (value, key) => {
    cookies.set(key, value)
  })

  if (headers && !isEmpty(headers)) {
    return headers
  }

  return state
}

export default headers
