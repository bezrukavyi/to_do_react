import * as types from './types'
import Api from 'store/Api/actions'

export const getList = (taskId, params = {}) =>
  Api.get(`tasks/${taskId}/attachments`, types.ATTACHMENT_LIST, { params, taskId })

export const create = (data, taskId) =>
  Api.post(`tasks/${taskId}/attachments`, types.ATTACHMENT_CREATE, { data, taskId })

export const destroy = (id) =>
  Api.delete(`attachments/${id}`, types.ATTACHMENT_DESTROY, { id })
