import React, { Component } from 'react'

import Task from '../Task'

const List = (props) => {
  const { tasksIds, projectId } = props

  return (
    <div>
      <div className='tasks__list-wrap'>
        { tasksIds.length == 0
          ? <span className='tasks__list-empty-title'>You have not any items</span>
          : tasksIds.map((id) => <Task key={id} id={id} />)

        }
      </div>
    </div>
  )
}

export default List
