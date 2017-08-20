import { get } from 'dot-prop-immutable'
import * as Project from '../Entities/Project/types'
import * as Task from '../Entities/Task/types'
import * as User from '../User/types'

const entitiesKeys = {
  [Project.PROJECT_LIST]: 'projects',
  [Project.PROJECT_GET]: 'projects',
  [Project.PROJECT_CREATE]: 'projects',
  [Project.PROJECT_UPDATE]: 'projects',
  [Task.TASK_LIST]: 'tasks',
  [Task.TASK_GET]: 'tasks',
  [Task.TASK_CREATE]: 'tasks',
  [Task.TASK_UPDATE]: 'tasks',
  [User.USER_SET_ACCESS_HEADERS]: 'user',
  [User.USER_SIGNOUT]: 'user',
  [User.VALIDATE_TOKEN]: 'user',
}

export const set = (state, type, payload, loaderState) => {
  const name = entitiesKeys[type]
  if(!name) { return state }

  const id = get(payload, 'data.id') || get(payload, 'id')

  if (id) {
    return { ...state, [name]: { ...state[name], [id]: { ...get(state, `${name}.${id}`), loading: true } } }
  } else {
    return { ...state, [name]: { ...state[name], loading: true } }
  }
}
