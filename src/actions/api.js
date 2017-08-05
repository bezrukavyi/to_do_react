import axios from 'axios'
import { transform } from 'lodash'

import { REQUEST, SUCCESS, FAILURE } from 'constants/actions'

const request = (method, path, action, {data, params}) => (dispatch, getState) => {
  dispatch({
    type: action + REQUEST,
  });

  const headers = getState().headers
  const baseURL = process.env.REACT_APP_DOMAIN

  const config = {
    baseURL,
    method,
    url: path,
    data,
    params,
    headers
  }

  return axios.request(config)
    .then((response) => {
      dispatch({
        type: action + SUCCESS,
        data: response.data,
        meta: response.headers
      });

      return response;
    })
    .catch((reject) => {
      dispatch({
        type: action + FAILURE,
        data: reject.response.data,
        meta: reject.response.headers
      });

      throw reject;
    })
}

const types = ['post', 'get', 'delete', 'patch']

const actionate = (api, method) => {
  api[method] = (path, action, {data, params}) => request(method, path, action, {data, params})
}

const api = transform(types, actionate, {})

export default api
