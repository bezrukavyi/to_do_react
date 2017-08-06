import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { choosedEntity } from 'selectors/entities'
import { formError, formSuccess, messageSuccess } from 'utils'
import { get as getAction, choose } from 'actions/projects'
import { Project } from 'components/projects'

const id = (ownProps) => ownProps.match.params.id || ownProps.id

const componentDidMount = (dispatch, ownProps) => {
  dispatch(getAction(id(ownProps))).then((response) => {
    choose(dispatch, response.data)
  })
}

const mapStateToProps = (state) => ({
  ...choosedEntity(state, 'projects'),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  componentDidMount: () => componentDidMount(dispatch, ownProps)
})


const ProjectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Project)

export default ProjectContainer
