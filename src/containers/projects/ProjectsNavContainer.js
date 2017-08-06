import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { formError, formSuccess, messageSuccess } from 'utils'
import { getList as getListAction } from 'actions/projects'
import { ProjectsNav } from 'components/projects'

const componentDidMount = (dispatch, ownProps) => {
  dispatch(getListAction())
}

const mapStateToProps = (state) => ({
  projects: state.entities.projects
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    componentDidMount: () => componentDidMount(dispatch, ownProps)
  }
}

const ProjectsNavContainer = connect(mapStateToProps, mapDispatchToProps)(ProjectsNav)

export default ProjectsNavContainer
