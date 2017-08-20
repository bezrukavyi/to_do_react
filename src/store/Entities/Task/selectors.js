import * as Entities from '../selectors'
import { pick } from 'utils'
import { map, pickBy } from 'lodash'

export const all = (projectId) => {
  const tasks = Entities.all('tasks')
  if (projectId) { return pickBy(tasks, task => task.projectId == projectId) }
  return tasks
}

export const allIds = (projectId) => map(all(projectId), (task) => task.id)
export const byId = (id) => Entities.byId('tasks', id)
export const initialValues = (id) => pick(['title'], byId(id) || {})
