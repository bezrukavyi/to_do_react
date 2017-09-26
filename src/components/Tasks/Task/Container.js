import { connect } from 'react-redux'
import { isEmpty } from 'lodash'

import { formAdapter } from 'utils'
import Task from 'store/Entities/Task'
import Attachment from 'store/Entities/Attachment'
import Component from './Component'

const checkAttachments = (isVisible, attachmentsIds, dispatchAttachment) => {
  if (isEmpty(attachmentsIds) && !isVisible) { return dispatchAttachment() }
}


const mapStateToProps = (state, ownProps) => ({
  ...Task.selectors.byId(ownProps.id),
  attachmentsIds: Attachment.selectors.all(ownProps.id),
})

const mapDispatchToProps = {
  remove: Task.actions.destroy,
  update: Task.actions.update,
  getAttachments: Attachment.actions.getList,
}

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  onConfirmRemove: formAdapter(() => dispatchProps.remove(ownProps.id)),
  check: formAdapter(() => dispatchProps.update(ownProps.id, { checked: !stateProps.checked })),
  onToggleVisibleAttachments: (isVisible) => checkAttachments(isVisible, stateProps.attachmentsIds, () => dispatchProps.getAttachments(ownProps.id)),
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component)
