import { FAILURE, SUCCESS, PROJECT_CREATE, PROJECTS_LIST, PROJECT_GET, PROJECT_UPDATE, PROJECT_DESTROY } from 'constants/actions'
import * as entities from 'utils/entities'

const entitiesReducer = (state = {}, { type, data }) => {
  switch (type) {
    case PROJECTS_LIST + SUCCESS:
    case PROJECT_GET + SUCCESS: {
      return entities.get(state, data)
    }
    case PROJECT_CREATE + SUCCESS: {
      return entities.create(state, data)
    }
    case PROJECT_UPDATE + SUCCESS: {
      return entities.update(state, data)
    }
    case PROJECT_DESTROY + SUCCESS: {
      return entities.destroy(state, data)
    }
    default:
      return state
  }
}

export default entitiesReducer
