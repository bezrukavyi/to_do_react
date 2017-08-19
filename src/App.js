import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import { AuthRoute, UnAuthRoute } from 'routes'
import Layouts from 'components/Layouts'
import Pages from 'components/Pages'
import * as path from 'routes/path'

export default ({ store, history }) =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layouts.Base>
        <Switch>
          <UnAuthRoute path={path.ROOT} component={Pages.SignIn} exact />
          <UnAuthRoute path={path.SIGN_UP} component={Pages.SignUp} exact />
          <AuthRoute path={path.AUTHED} component={() => <h1>Authed</h1>} exact />

          <Route component={() => <h1>404</h1>} />
        </Switch>
      </Layouts.Base>
    </ConnectedRouter>
  </Provider>
