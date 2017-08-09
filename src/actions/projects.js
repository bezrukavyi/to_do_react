import { PROJECT_CREATE, PROJECTS_LIST, PROJECT_GET, PROJECT_UPDATE, PROJECT_DESTROY } from 'constants/actions'
import { isEmpty } from 'lodash'
import api from './api'

export const getList = (params) =>
  api.get('projects', PROJECTS_LIST, { params })

export const get = (id, params = {}) =>
  api.get(`projects/${id}`, PROJECT_GET, { params })

export const create = (data) =>
  api.post('projects', PROJECT_CREATE, { data })

export const update = (id, data) =>
  api.patch(`projects/${id}`, PROJECT_UPDATE, { data })

export const destroy = (id) =>
  api.delete(`projects/${id}`, PROJECT_DESTROY, {})
