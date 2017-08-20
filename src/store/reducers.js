import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import Entities from './Entities'
import User from './User'

export default combineReducers({
  form: formReducer,
  routing: routerReducer,
  entities: Entities.reducer,
  user: User.reducer,
})
