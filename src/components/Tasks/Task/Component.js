import React, { Component } from 'react'

import { Buttons } from 'components'
import Edit from './Edit'

const Task = (props) => {
  const { title, id, onConfirmRemove } = props

  return (
    <div className='tasks__item-wrap'>
      <h2>{ title }</h2>
      <Edit id={id} />
      <Buttons.Simple onClick={onConfirmRemove} className='btn-link btn-hint'>
        Remove task
      </Buttons.Simple>
    </div>
  )
}

export default Task
