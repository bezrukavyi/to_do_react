import { connect } from 'react-redux'

import { formAdapter } from 'utils'
import Task from 'store/Entities/Task'
import TaskItem from './Component'

const mapStateToProps = (state, ownProps) => ({
  ...Task.selectors.byId(ownProps.id),
})

const mapDispatchToProps = {
  remove: Task.actions.destroy,
  update: Task.actions.update,
}

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  onConfirmRemove: () => dispatchProps.remove(ownProps.id),
  check: () => dispatchProps.update(ownProps.id, { checked: !stateProps.checked }),
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(TaskItem)
