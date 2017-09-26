import { connect } from 'react-redux'

import { formAdapter } from 'utils'
import Attachment from 'store/Entities/Attachment'
import Component from './Component'

const mapStateToProps = (state, ownProps) => ({
  ...Attachment.selectors.byId(ownProps.id),
})

const mapDispatchToProps = {
  remove: Attachment.actions.destroy
}

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  onConfirmRemove: formAdapter(() => dispatchProps.remove(ownProps.id))
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component)
