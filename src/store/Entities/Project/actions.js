import * as types from './types'
import Api from 'store/Api/actions'

export const getList = (params) =>
  Api.get('projects', types.PROJECT_LIST, { params })

export const get = (id, params = {}) =>
  Api.get(`projects/${id}`, types.PROJECT_GET, { params, id })

export const create = (data) =>
  Api.post('projects', types.PROJECT_CREATE, { data })

export const update = (id, data) =>
  Api.patch(`projects/${id}`, types.PROJECT_UPDATE, { id, data })

export const destroy = (id) =>
  Api.delete(`projects/${id}`, types.PROJECT_DESTROY, { id })
