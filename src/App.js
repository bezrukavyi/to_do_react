import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router'
import ReduxToastr from 'react-redux-toastr'

import * as path from 'constants/path'
import AuthRoute from 'routes/AuthRoute'
import { Layout } from 'components'
import { SignUpFormContainer as SignUp, SignInFormContainer as SignIn } from 'containers/auth'
import { Projects } from 'components/projects'

const App = ({ store, history, ...props }) =>
  <Layout>
    <Provider store={store}>
      <div>
        <Router history={history}>
          <Switch>
            <Route exact path={path.ROOT_PATH} component={SignIn} />
            <Route path={path.SIGN_UP_PATH} component={SignUp} />
            <AuthRoute path={path.PROJECTS_PATH} component={Projects} />
          </Switch>
        </Router>

        <ReduxToastr />
      </div>
    </Provider>
  </Layout>


export default App
