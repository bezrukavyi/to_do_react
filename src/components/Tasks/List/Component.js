import React, { Component } from 'react'

import Task from '../Task'
import Create from './Create'

const List = (props) => {
  const { tasksIds, projectId } = props

  return (
    <div>
      <div className='tasks__list-wrap'>
        { tasksIds.map((id) => <Task key={id} id={id} />) }
      </div>

      <Create projectId={projectId} />
    </div>
  )
}

export default List
