import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { formAdapter } from 'utils'
import Task from 'store/Entities/Task'
import Edit from './Component'

const mapStateToProps = (state, ownProps) => ({
  initialValues: Task.selectors.initialValues(ownProps.id),
  form: `Task.Update.${ownProps.id}`,
})

const mapDispatchToProps = {
  update: Task.actions.update,
}

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  onSubmit: formAdapter((data) => dispatchProps.update(ownProps.id, data))
})

const reduxEdit = reduxForm({})(Edit)
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(reduxEdit)
