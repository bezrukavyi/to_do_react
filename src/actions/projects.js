import { PROJECT_CREATE, PROJECTS_LIST, PROJECT_GET, PROJECT_CHOOSE } from 'constants/actions'
import { isEmpty } from 'lodash'
import api from './api'

export const getList = (params) => {
  return api.get('projects', PROJECTS_LIST, { params })
}

export const get = (id, params = {}) => {
  return api.get(`projects/${id}`, PROJECT_GET, { params })
}

export const create = (data) =>
  api.post('projects', PROJECT_CREATE, { data })

export const choose = (dispatch, data) =>
  dispatch({ data, type: PROJECT_CHOOSE })
