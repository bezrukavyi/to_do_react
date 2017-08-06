import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, Switch, Redirect } from 'react-router'
import ReduxToastr from 'react-redux-toastr'

import * as path from 'constants/path'
import AuthRoute from 'routes/AuthRoute'
import { Layout, PageNotFound } from 'components'
import { SignIn, SignUp } from 'components/auth'
import { Projects } from 'components/projects'

const App = ({ store, history, ...props }) =>
  <Layout>
    <Provider store={store}>
      <div>
        <Router history={history}>
          <Switch>
            <AuthRoute path={path.ROOT} component={SignIn} accessForAuthed={false} exact />
            <AuthRoute path={path.SIGN_UP} component={SignUp} accessForAuthed={false} exact />
            <AuthRoute path={path.PROJECTS} component={Projects} />
            <Route path={path.NOT_FOUND_404} component={PageNotFound} />
            <Redirect to={path.NOT_FOUND_404} />
          </Switch>
        </Router>

        <ReduxToastr />
      </div>
    </Provider>
  </Layout>


export default App
