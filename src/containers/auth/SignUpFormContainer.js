import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { formError, formSuccess, messageSuccess } from 'utils'
import { signUp as signUpAction } from 'actions/auth'
import { SignUpForm } from 'components/auth'

const signUp = (dispatch, ownProps, values) => {
  return dispatch(signUpAction({auth: values}))
  .then((response) => messageSuccess('Success sign up'))
  .catch((reject) => formError({ form: reject }))
}

const mapStateToProps = (state) => ({
  initialValues: {
    full_name: null,
    email: null,
    password: null,
    password_confirmation: null,
  }
})


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (values) => signUp(dispatch, ownProps, values)
  }
}

const reduxSignUpForm = reduxForm({form: 'SignUpForm'})(SignUpForm)
const SignUpFormContainer = connect(mapStateToProps, mapDispatchToProps)(reduxSignUpForm)

export default SignUpFormContainer
