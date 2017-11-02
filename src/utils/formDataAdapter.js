import { each, pickBy, isEmpty } from 'lodash'
import { get } from 'dot-prop-immutable'

export const clearData = (data) => pickBy(data, (value, key) => !isEmpty(value))

const formDataAdapter = (data = {}, appendData) => {
  const formData = new FormData()
  each(clearData(data), (value, key) => formData.append(key, value))
  each(appendData, (path, key) => get(data, path) && formData.append(key, get(data, path)))
  return formData
}

export default formDataAdapter
