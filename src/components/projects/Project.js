import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Preloader } from 'components'
import { default as ProjectForm } from 'containers/projects/ProjectFormContainer'
import * as path from 'constants/path'

class Project extends Component {
  componentDidMount() {
    this.props.componentDidMount()
  }

  render() {
    const { match, id, attributes } = this.props

    if (!attributes) {
      return <Preloader />
    }

    return (
      <div className='main-container'>
        <h3>{ attributes.title }</h3>

        <Link to={path.EDIT_PROJECT(id)}>Edit</Link>
      </div>
    )
  }
}

export default Project
