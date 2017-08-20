import * as types from './types'
import Api from 'store/Api/actions'

export const getList = (projectId, params = {}) =>
  Api.get(`projects/${projectId}/tasks`, types.TASK_LIST, { params })

export const get = (id, params = {}) =>
  Api.get(`tasks/${id}`, types.TASK_GET, { params, id })

export const create = (data, projectId) =>
  Api.post(`projects/${projectId}/tasks`, types.TASK_CREATE, { data })

export const update = (id, data) =>
  Api.patch(`tasks/${id}`, types.TASK_UPDATE, { id, data })

export const destroy = (id) =>
  Api.delete(`tasks/${id}`, types.TASK_DESTROY, { id })
