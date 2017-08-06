import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { formError, formSuccess, messageSuccess } from 'utils'
import { create as createAction } from 'actions/projects'
import ProjectForm from 'components/projects/ProjectForm'

const create = (dispatch, ownProps, values) => {
  return dispatch(createAction({project: values}))
  .then((response) => messageSuccess('Project created'))
  .catch((reject) => formError({ form: reject }))
}

const mapStateToProps = (state) => ({
  initialValues: {
    title: null,
    complete_at: null,
  }
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (values) => create(dispatch, ownProps, values)
})

const reduxProjectForm = reduxForm({form: 'ProjectForm'})(ProjectForm)
const ProjectFormContainer = connect(mapStateToProps, mapDispatchToProps)(reduxProjectForm)

export default ProjectFormContainer
