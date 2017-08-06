export const ROOT = '/'
export const NOT_FOUND_404 = '/404'
export const SIGN_IN = '/sign_in'
export const SIGN_UP = '/sign_up'
export const PROJECTS = '/projects'
export const PROJECT_CREATE = '/projects/create'

export const PROJECT = (id) => `/projects/${id ? id : ':id(\\d+)'}`
export const EDIT_PROJECT = (id) => `/projects/edit/${id ? id : ':id(\\d+)'}`
