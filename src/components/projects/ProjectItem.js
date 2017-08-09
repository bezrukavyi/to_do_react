import React from 'react'
import { NavLink } from 'react-router-dom'

import * as path from 'constants/path'

const ProjectItem = ({ project }) =>
  <NavLink to={path.PROJECT(project.id)} activeClassName='active'>
    { project.title }
  </NavLink>

export default ProjectItem
