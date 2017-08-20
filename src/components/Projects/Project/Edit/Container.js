import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { formAdapter } from 'utils'
import Project from 'store/Entities/Project'
import Edit from './Component'

const mapStateToProps = (state, ownProps) => ({
  initialValues: Project.selectors.initialValues(ownProps.id),
  form: `Project.Update.${ownProps.id}`,
})

const mapDispatchToProps = {
  update: Project.actions.update,
}

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  onSubmit: formAdapter((data) => dispatchProps.update(ownProps.id, data))
})

const reduxEdit = reduxForm({})(Edit)
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(reduxEdit)
