import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { formError, formSuccess, messageSuccess } from 'utils'
import { signIn as signInAction } from 'actions/auth'
import { SignInForm } from 'components/auth'

const signIn = (dispatch, ownProps, values) => {
  return dispatch(signInAction({auth: values}))
  .then((response) => messageSuccess('Success sign in'))
  .catch((reject) => formError({ form: reject }))
}

const mapStateToProps = (state) => ({
  initialValues: {
    email: null,
    password: null,
  }
})


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (values) => signIn(dispatch, ownProps, values)
  }
}

const reduxSignInForm = reduxForm({form: 'SignInForm'})(SignInForm)
const SignInFormContainer = connect(mapStateToProps, mapDispatchToProps)(reduxSignInForm)

export default SignInFormContainer
