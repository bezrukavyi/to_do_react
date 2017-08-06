import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import * as path from 'constants/path'

class ProjectsNav extends Component {
  componentDidMount() {
    this.props.componentDidMount()
  }

  render() {
    const { match } = this.props

    return (
      <div className='main-container'>
        <h3>Projects</h3>
        <Link to={path.PROJECT_CREATE}>Create Project</Link>

        <Link to={path.PROJECT(1)}>Project 1</Link>
        <Link to={path.PROJECT(2)}>Project 2</Link>
      </div>
    )
  }
}

export default ProjectsNav
