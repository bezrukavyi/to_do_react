import React from 'react'
import { Provider } from 'react-redux'
import { Router, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import { AuthRoute, UnAuthRoute, Route } from 'routes'
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
          <AuthRoute path={path.DASHBOARD} component={Pages.Dashboard} exact />

          <Route path={path.ERROR_500} component={Pages.Error500} exact />
          <Route path={path.ERROR_404} component={Pages.Error404} exact />
        </Switch>
      </Layouts.Base>
    </ConnectedRouter>
  </Provider>
