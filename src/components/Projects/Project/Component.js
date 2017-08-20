import React, { Component } from 'react'

import { Buttons } from 'components'
import Edit from './Edit'
import Tasks from 'components/Tasks'

const Project = (props) => {
  const { title, id, onConfirmRemove, getTasks } = props

  return (
    <div className='projects__item-wrap'>
      <h2>{ title }</h2>
      <Edit id={id} />
      <Buttons.Simple onClick={onConfirmRemove} className='btn-link btn-hint'> Remove </Buttons.Simple>
      <Buttons.Simple onClick={getTasks} className='btn-link btn-hint'> Show tasks </Buttons.Simple>
      <Tasks.List projectId={id} />
    </div>
  )
}

export default Project
