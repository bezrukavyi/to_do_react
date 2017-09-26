import * as utils from './utils'
import * as Project from './Project/types'
import * as Task from './Task/types'
import * as Attachment from './Attachment/types'
import { SUCCESS } from '../Api/types'

const entities = (state = {}, { type, payload }) => {
  switch (type) {
    case Project.PROJECT_LIST + SUCCESS:
    case Project.PROJECT_GET + SUCCESS:
    case Project.PROJECT_CREATE + SUCCESS:
    case Project.PROJECT_UPDATE + SUCCESS:
    case Task.TASK_LIST + SUCCESS:
    case Task.TASK_GET + SUCCESS:
    case Task.TASK_CREATE + SUCCESS:
    case Task.TASK_UPDATE + SUCCESS:
    case Attachment.ATTACHMENT_LIST + SUCCESS:
    case Attachment.ATTACHMENT_CREATE + SUCCESS: {
      return utils.complement(state, payload.data)
    }
    case Project.PROJECT_DESTROY + SUCCESS:
    case Task.TASK_DESTROY + SUCCESS:
    case Attachment.ATTACHMENT_DESTROY + SUCCESS: {
      return utils.slice(state, payload.data)
    }
    default:
      return state
  }
}

export default entities
