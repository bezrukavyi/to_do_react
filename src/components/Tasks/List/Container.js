import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { formAdapter } from 'utils'
import connectWithLifeCycle from 'utils/lifecycle'
import Task from 'store/Entities/Task'
import List from './Component'

const mapStateToProps = (state, ownProps) => ({
  tasksIds: Task.selectors.allIds(ownProps.projectId),
})

export default connectWithLifeCycle(mapStateToProps)(List)
