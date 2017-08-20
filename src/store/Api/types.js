export const REQUEST = '_REQUEST'
export const FAILURE = '_FAILURE'
export const SUCCESS = '_SUCCESS'

export const isFetchRequest = (type) => /_REQUEST$/.test(type)
export const isFetchSuccess = (type) => /_SUCCESS$/.test(type)
export const isFetchFailure = (type) => /_FAILURE$/.test(type)
