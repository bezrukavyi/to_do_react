import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form'

import { formAdapter } from 'utils'
import Task from 'store/Entities/Task'
import Create from './Component'

const mapStateToProps = (state, ownProps) => ({
  initialValues: Task.selectors.initialValues(),
  form: `Task.Create.${ownProps.projectId}`,
})

const mapDispatchToProps = {
  create: Task.actions.create,
  reset
}

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  onSubmit: formAdapter((data) => dispatchProps.create(data, ownProps.projectId).then(() => dispatchProps.reset(stateProps.form)))
})

const reduxCreate = reduxForm({})(Create)
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(reduxCreate)
