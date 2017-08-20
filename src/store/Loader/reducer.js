import * as Api from '../Api/types'
import * as utils from './utils'

const loader = (state = {}, { type, payload }) => {
  if (Api.isFetchRequest(type)) {
    const name = type.split(Api.REQUEST)[0]
    return utils.set(state, name, payload, true)
  }

  if (Api.isFetchSuccess(type)) {
    const name = type.split(Api.SUCCESS)[0]
    return utils.set(state, name, payload, false)
  }

  if (Api.isFetchFailure(type)) {
    const name = type.split(Api.FAILURE)[0]
    return utils.set(state, name, payload, false)
  }

  return state
}

export default loader
