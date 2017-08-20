import { get } from 'dot-prop-immutable'
import { store } from 'store'

export const isLoaded = (name, id) => {
  const find = id ? `${name}.${id}` : name
  return get(store.getState().loader, find) === false
}
