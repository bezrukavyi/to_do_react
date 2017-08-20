import { connect } from 'react-redux'

import AuthLayout from './Component'
import User from 'store/User'

const mapDispatchToProps = {
  signout: User.actions.signout,
}

export default connect(null, mapDispatchToProps)(AuthLayout)
