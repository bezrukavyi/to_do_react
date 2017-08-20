import { connect } from 'react-redux'

import { formAdapter } from 'utils'
import Task from 'store/Entities/Task'
import TaskItem from './Component'

const mapStateToProps = (state, ownProps) => ({
  ...Task.selectors.byId(ownProps.id),
})

const mapDispatchToProps = {
  remove: Task.actions.destroy,
}

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  onConfirmRemove: () => dispatchProps.remove(ownProps.id)
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(TaskItem)
