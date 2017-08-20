import React, { Component } from 'react'

import Project from '../Project'
import Create from './Create'

const List = (props) => {
  const { projectsIds } = props

  return (
    <div>
      <Create />
      <div className='projects__list-wrap'>
        { projectsIds.map((id) => <Project key={id} id={id} />) }
      </div>
    </div>
  )
}

export default List
