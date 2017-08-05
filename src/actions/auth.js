import { VALIDATE_TOKEN, SIGN_UP, SIGN_IN } from 'constants/actions'
import api from './api'

export const validateToken = () =>
  api.get('auth/validate_token', VALIDATE_TOKEN, {})

export const signUp = (data) =>
  api.post('auth', SIGN_UP, { data })

export const signIn = (data) =>
  api.post('auth/sign_in', SIGN_IN, { data })
