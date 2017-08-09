import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { withRouter } from 'react-router'

import { history } from 'store'
import { choosedEntity } from 'selectors/entities'
import { formError, formSuccess, messageSuccess } from 'utils'
import { fetchId } from 'selectors/entities'
import { destroy as destroyAction } from 'actions/projects'
import { Project } from 'components/projects'
import * as path from 'constants/path'

const mapStateToProps = (state, ownProps) => ({
  project: choosedEntity(state, 'projects', ownProps)
})

const destroy = (id) => (dispatch, ownProps) => {
  dispatch(destroyAction(id))
  .then((response) => history.push(path.PROJECTS))
  .catch((reject) => console.log(reject))
}

const mapDispatchToProps = ({
  destroy
})

const ProjectContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Project)

export default withRouter(ProjectContainer)
