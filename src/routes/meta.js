import * as path from './path'

const suffix = (name) => `${name} | ToDoReact`

const metaInfo = (title, template = suffix, link, meta) => ({ title: template(title), link, meta })

export default {
  [path.ROOT]: metaInfo('Main'),
  [path.SIGN_UP]: metaInfo('Sign up'),
  [path.SIGN_IN]: metaInfo('Sign in'),
  [path.DASHBOARD]: metaInfo('Dashboard'),
  [path.ERROR_404]: metaInfo('Not found'),
  [path.ERROR_500]: metaInfo('Error'),
}
