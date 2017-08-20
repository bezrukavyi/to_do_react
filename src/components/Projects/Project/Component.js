import React, { Component } from 'react'
import classnames from 'classnames'

import { Buttons, CustomComponent } from 'components'
import Edit from './Edit'
import Tasks from 'components/Tasks'

class Project extends CustomComponent.ForManage {
  inititalize(props) {
    this.state = { ...this.state, addTaskTools: false }
    this.toggleAddTaskTooks = this.toggleAddTaskTooks.bind(this)
  }

  toggleAddTaskTooks(props) {
    this.setState({ addTaskTools: !this.state.addTaskTools })
  }

  render() {
    const { title, id, onConfirmRemove, getTasks } = this.props
    const { isActiveTools, editTools, removeTools, addTaskTools } = this.state
    const { toggleTools, toggleEdit, toggleRemove, confirmRemove, confirmEdit, toggleAddTaskTooks } = this

    return (
      <div className='project-wrap'>
        <div className='project__nav'>
          <div className='project__nav-title'>
            <h3>{ title }</h3>
          </div>
          <div className='project__nav-tools'>
            <button onClick={toggleTools} className='project__nav-button'>Setting</button>
          </div>
        </div>

        <div className='project__content'>
          <div className={classnames('project__tools-wrap', {'project__tools-wrap--active': isActiveTools})}>
            { isActiveTools && !editTools && !removeTools && !addTaskTools &&
              <div className='project__tools'>
                <button onClick={toggleAddTaskTooks} className='project__nav-button'>Add task</button>
                <button onClick={toggleEdit} className='project__nav-button'>Edit</button>
                <button onClick={toggleRemove} className='project__nav-button'>Delete</button>
                <button onClick={toggleTools} className='project__nav-button'>Close</button>
              </div>
            }

            { addTaskTools &&
              <div className='project__tools'>
                <Tasks.Create projectId={id} onSuccess={toggleAddTaskTooks} />
                <button onClick={toggleAddTaskTooks} className='project__nav-button'>Close</button>
              </div>
            }

            { editTools &&
              <div className='project__tools'>
                <Edit id={id} onSuccess={confirmEdit} />
                <button onClick={toggleEdit} className='project__nav-button'>Close</button>
              </div>
            }

            { removeTools &&
              <div className='project__tools'>
                <button onClick={confirmRemove} className='project__nav-button'>Confirm</button>
                <button onClick={toggleRemove} className='project__nav-button'>Close</button>
              </div>
            }
          </div>

          <div className='project__tasks'>
            <Tasks.List projectId={id} />
          </div>
        </div>
      </div>
    )
  }
}

export default Project
