import React, { Component } from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'

import { Preloader } from 'components'
import { default as ProjectForm } from 'containers/projects/ProjectFormContainer'
import * as path from 'constants/path'

class Project extends Component {
  render() {
    const { match, project, destroy } = this.props
    const currentLocation = this.props.location.pathname

    if (!project) {
      return <Preloader />
    }

    const editLink = path.EDIT_PROJECT(project.id)

    if (currentLocation === editLink) {
      return (
        <div>
          <ProjectForm project={project} />
          <button onClick={this.props.history.goBack}>Close</button>
        </div>
      )
    }

    return (
      <div>
        <h1>{ project.title }</h1>
        <Link to={editLink}>Edit</Link>
        <button onClick={() => destroy(project.id)}>Delete</button>
      </div>
    )
  }
}

export default Project
