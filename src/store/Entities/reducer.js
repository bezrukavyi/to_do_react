import * as utils from './utils'
import * as project from './Project/types'
import * as task from './Task/types'
import { SUCCESS } from '../Api/types'

const entities = (state = {}, { type, payload }) => {
  switch (type) {
    case project.PROJECT_LIST + SUCCESS:
    case project.PROJECT_GET + SUCCESS:
    case project.PROJECT_CREATE + SUCCESS:
    case project.PROJECT_UPDATE + SUCCESS:
    case task.TASK_LIST + SUCCESS:
    case task.TASK_GET + SUCCESS:
    case task.TASK_CREATE + SUCCESS:
    case task.TASK_UPDATE + SUCCESS: {
      return utils.complement(state, payload.data)
    }
    case project.PROJECT_DESTROY + SUCCESS:
    case task.TASK_DESTROY + SUCCESS: {
      return utils.slice(state, payload.data)
    }
    default:
      return state
  }
}

export default entities
