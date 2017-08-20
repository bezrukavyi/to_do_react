import * as Entities from '../selectors'
import { pick } from 'utils'

export const all = () => Entities.all('projects')
export const allIds = () => Entities.allIds('projects')
export const byId = (id) => Entities.byId('projects', id)

export const initialValues = (id) => {
  const project = byId(id) || {}
  return pick(['title'], project)
}
