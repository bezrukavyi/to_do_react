import React from 'react'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'

import { PageNotFound } from 'components'
import {
  ProjectContainer as Project,
  ProjectFormContainer as ProjectForm,
  ProjectsNavContainer as ProjectsNav
} from 'containers/projects'
import * as path from 'constants/path'

const Projects = () =>
  <div>
    <h1>Projects</h1>
    <ProjectsNav />

    <Switch>
      <Route path={path.PROJECT_CREATE} component={ProjectForm} exact />
      <Route path={path.PROJECT()} component={Project} exact />
      <Route path={path.EDIT_PROJECT()} component={ProjectForm} exact />
    </Switch>
  </div>

export default Projects
