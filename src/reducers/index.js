import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import headers from './headers'
import user from './user'

export default combineReducers({
  form: formReducer,
  router: routerReducer,
  toastr: toastrReducer,
  headers,
  user,
})
