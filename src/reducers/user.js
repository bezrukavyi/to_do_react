import { FAILURE, SUCCESS, VALIDATE_TOKEN, SIGN_UP, SIGN_IN } from 'constants/actions'

const user = (state = null, { type, data }) => {
  switch (type) {
    case VALIDATE_TOKEN + SUCCESS:
    case SIGN_UP + SUCCESS:
    case SIGN_IN + SUCCESS: {
      return {...state, ...data}
    }
    default:
      return state
  }
}

export default user
