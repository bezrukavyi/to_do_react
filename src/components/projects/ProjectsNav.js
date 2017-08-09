import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { isEmpty } from 'lodash'

import { Preloader } from 'components'
import { ProjectItem } from 'components/projects'
import * as path from 'constants/path'

class ProjectsNav extends Component {
  componentDidMount() {
    this.props.componentDidMount()
  }

  render() {
    const { match, projects, onChangeProject } = this.props

    if (!projects) {
      return <Preloader />
    }

    return (
      <div>
        <ul>
          {
            projects.map((project, index) => {
              return <li onClick={(event) => onChangeProject(event, project.id)} key={index}><ProjectItem project={project} /></li>
            })
          }
        </ul>

        <Link to={path.PROJECT_CREATE}>
          Add Project
        </Link>
      </div>
    )
  }
}

export default ProjectsNav
