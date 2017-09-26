import * as Entities from '../selectors'
import { pick } from 'utils'
import { map, pickBy } from 'lodash'

export const all = (taskId) => {
  const attachments = Entities.all('attachments')
  if (taskId) { return pickBy(attachments, attachment => attachment.taskId == taskId) }
  return attachments
}

export const allIds = (taskId) => map(all(taskId), (attachment) => attachment.id)
export const byId = (id) => Entities.byId('attachments', id)
