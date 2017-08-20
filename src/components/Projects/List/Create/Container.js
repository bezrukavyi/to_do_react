import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form'

import { formAdapter } from 'utils'
import Project from 'store/Entities/Project'
import Create from './Component'

const mapStateToProps = (state, ownProps) => ({
  initialValues: Project.selectors.initialValues(),
  form: 'Project.Create',
})

const mapDispatchToProps = {
  create: Project.actions.create,
  reset
}

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  onSubmit: formAdapter((data) => dispatchProps.create(data).then(() => dispatchProps.reset(stateProps.form)))
})

const reduxCreate = reduxForm({})(Create)
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(reduxCreate)
