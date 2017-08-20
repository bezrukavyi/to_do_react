import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { formAdapter } from 'utils'
import connectWithLifeCycle from 'utils/lifecycle'
import Project from 'store/Entities/Project'
import List from './Component'

const mapStateToProps = () => ({
  projectsIds: Project.selectors.allIds(),
})

const mapDispatchToProps = {
  componentDidMount: Project.actions.getList
}

export default connectWithLifeCycle(mapStateToProps, mapDispatchToProps)(List)
