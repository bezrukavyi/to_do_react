import React from 'react'
import { Provider } from 'react-redux'
import { Router, IndexRoute, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import User from 'store/User'
import { AuthRoute, UnAuthRoute, MetaRoute as Route } from 'routes'
import Layouts from 'components/Layouts'
import Pages from 'components/Pages'
import * as Path from 'constants/Path'

export default ({ store, history }) =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layouts.Base>
        <Switch>
          <UnAuthRoute path={Path.ROOT} component={Pages.SignIn} exact />
          <UnAuthRoute path={Path.SIGN_UP} component={Pages.SignUp} exact />
          <UnAuthRoute path={Path.FORGOT_PASSWORD} component={Pages.ForgotPassword} />

          <AuthRoute path={Path.DASHBOARD} component={Pages.Dashboard} />
          <AuthRoute path={Path.RESET_PASSWORD} component={Pages.ResetPassword} onSuccess={User.actions.setResetPasswordToken} />
          <AuthRoute path={Path.UPDATE_PASSWORD} component={Pages.UpdatePassword} />

          <AuthRoute path={Path.DASHBOARD} component={() => <h1>DASHBOARD</h1>} exact />

          <Route path={Path.ERROR_500} component={Pages.Error500} />
          <Route path='*' component={Pages.Error404} />
        </Switch>
      </Layouts.Base>
    </ConnectedRouter>
  </Provider>
