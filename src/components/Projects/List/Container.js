import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { formAdapter } from 'utils'
import connectWithLifeCycle from 'lifecycle-connector'
import Project from 'store/Entities/Project'
import List from './Component'

const mapStateToProps = (state) => ({
  projectsIds: Project.selectors.allIds(state),
})

const mapDispatchToProps = {
  componentDidMount: Project.actions.getList
}

export default connectWithLifeCycle(mapStateToProps, mapDispatchToProps)(List)
