import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { formError, formSuccess, messageSuccess } from 'utils'
import { getList as getListAction, get as getAction } from 'actions/projects'
import { ProjectsNav } from 'components/projects'
import { listEntities } from 'selectors/entities'

const changeProject = (event, dispatch, id) => {
  event.preventDefault()
  dispatch(getAction(id))
}

const mapStateToProps = (state) => ({
  projects: listEntities(state, 'projects')
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    componentDidMount: () => dispatch(getListAction()),
    onChangeProject: (event, id) => changeProject(event, dispatch, id)
  }
}

const ProjectsNavContainer = connect(mapStateToProps, mapDispatchToProps)(ProjectsNav)

export default ProjectsNavContainer
