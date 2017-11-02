import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form'
import { isFunction } from 'lodash'

import formAdapter from 'utils/formAdapter'
import formDataAdapter from 'utils/formDataAdapter'
import Attachment from 'store/Entities/Attachment'
import Create from './Component'

const mapStateToProps = (state, ownProps) => ({
  form: `Attachment.Create.${ownProps.taskId}`
})

const mapDispatchToProps = {
  create: Attachment.actions.create,
  reset
}

const onSubmit = (dispatchProps, stateProps, ownProps) => (data) =>
  dispatchProps.create(formDataAdapter(data, { file: 'file.0' }), ownProps.taskId)
  .then(() => onSuccess(dispatchProps, stateProps, ownProps))

const onSuccess = (dispatchProps, stateProps, ownProps) => {
  if(isFunction(ownProps.onSuccess)) { ownProps.onSuccess() }
  return dispatchProps.reset(stateProps.form)
}

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  onSubmit: formAdapter(onSubmit(dispatchProps, stateProps, ownProps)),
})

const reduxCreate = reduxForm({})(Create)
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(reduxCreate)
