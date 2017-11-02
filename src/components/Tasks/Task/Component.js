import React, { Component } from 'react'
import classnames from 'classnames'
import { isFunction } from 'lodash'

import { Buttons, CustomComponent } from 'components'
import Edit from '../Edit'
import Attachments from 'components/Attachments'

class Task extends CustomComponent.ForManage {
  inititalize(props) {
    this.state = { ...this.state, isVisibleAttachments: false }
    this.toggleVisibleAttachmets = this.toggleVisibleAttachmets.bind(this)
  }

  toggleVisibleAttachmets(values) {
    this.setState({ isVisibleAttachments: !this.state.isVisibleAttachments })
    if(isFunction(this.props.onToggleVisibleAttachments)) { this.props.onToggleVisibleAttachments(values) }
  }

  render() {
    const { title, id, checked, onConfirmRemove, check } = this.props
    const { editTools, removeTools, isVisibleAttachments } = this.state
    const { toggleEdit, toggleRemove, confirmRemove, confirmEdit, toggleVisibleAttachmets } = this

    return (
      <div className='tasks__item-wrap'>
        { !editTools && !removeTools &&
          <div className='task__content-wrap'>
            <div className='task__content'>
              <div className='task__info'>
                <input onClick={check} type='checkbox' className='task__nav-checkbox' checked={checked} />
                <span className={classnames('task__title', { 'task__title--checked': checked })}>{ title }</span>
              </div>

              <div className='task__tools'>
                <button onClick={() => toggleVisibleAttachmets(isVisibleAttachments)} className='task__nav-button'>Attachments</button>
                <button onClick={toggleEdit} className='task__nav-button'>Edit</button>
                <button onClick={toggleRemove} className='task__nav-button'>Remove</button>
              </div>
            </div>

            { isVisibleAttachments &&
              <div className='task__attachments-wrap'>
                <Attachments.List taskId={id} />
                <Attachments.Create taskId={id} />
              </div>
            }
          </div>
        }

        { editTools &&
          <div className='task__tools'>
            <Edit id={id} onSuccess={confirmEdit}>
              <button onClick={toggleEdit} className='task__nav-button'>Close</button>
            </Edit>
          </div>
        }

        { removeTools &&
          <div className='task__tools'>
            <span>{ title } </span>
            <div>
              <button onClick={confirmRemove} className='task__nav-button'>Confirm</button>
              <button onClick={toggleRemove} className='task__nav-button'>Close</button>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Task
