import { FAILURE, SUCCESS, PROJECT_CREATE, PROJECTS_LIST, PROJECT_GET, PROJECT_CHOOSE } from 'constants/actions'
import * as entities from 'utils/entities'

const entitiesReducer = (state = {}, { type, data }) => {
  switch (type) {
    case PROJECTS_LIST + SUCCESS: {
      return entities.getList(state, data)
    }
    case PROJECT_CREATE + SUCCESS: {
      return entities.create(state, data)
    }
    case PROJECT_GET + SUCCESS: {
      return entities.get(state, data)
    }
    case PROJECT_CHOOSE: {
      return entities.choose(state, data)
    }
    default:
      return state
  }
}

export default entitiesReducer
