import { connect } from 'react-redux'

import { formAdapter } from 'utils'
import Project from 'store/Entities/Project'
import Task from 'store/Entities/Task'
import ProjectItem from './Component'

const mapStateToProps = (state, ownProps) => ({
  ...Project.selectors.byId(ownProps.id),
})

const mapDispatchToProps = {
  remove: Project.actions.destroy,
  getTasks: Task.actions.getList,
}

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  onConfirmRemove: formAdapter(() => dispatchProps.remove(ownProps.id)),
  getTasks: formAdapter(() => dispatchProps.getTasks(ownProps.id)),
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ProjectItem)
