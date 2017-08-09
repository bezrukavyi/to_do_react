import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import dotProp from 'dot-prop-immutable'

import { formError, formSuccess, messageSuccess } from 'utils'
import { create as createAction, update as updateAction } from 'actions/projects'
import ProjectForm from 'components/projects/ProjectForm'

const create = (dispatch, values) => {
  return dispatch(createAction({project: values}))
  .then((response) => messageSuccess('Project created'))
  .catch((reject) => formError({ form: reject }))
}

const update = (dispatch, project, values) => {
  return dispatch(updateAction(project.id, {project: values}))
  .then((response) => messageSuccess('Project updated'))
  .catch((reject) => formError({ form: reject }))
}

const onSubmit = (dispatch, ownProps, values) => {
  ownProps.project
    ? update(dispatch, ownProps.project, values)
    : create(dispatch, values)
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (values) => onSubmit(dispatch, ownProps, values)
})

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const project = dotProp.get(ownProps, 'project.attributes') || {}

  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    initialValues: {
      title: project.title,
      complete_at: project.completeAt,
    }
  }
}

const reduxProjectForm = reduxForm({form: 'ProjectForm'})(ProjectForm)
const ProjectFormContainer = connect(null, mapDispatchToProps, mergeProps)(reduxProjectForm)

export default ProjectFormContainer
