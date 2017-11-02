import React, { Component } from 'react'
import classnames from 'classnames'

import { Buttons, CustomComponent } from 'components'
import Edit from '../Edit'
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
        { !editTools &&
          <div className='project__nav'>
            <div className='project__nav-title'>
              <h3>{ title }</h3>
            </div>
            <div className='project__nav-tools'>
              <button onClick={toggleTools} className='entity__nav-button'>Setting</button>
            </div>
          </div>
        }

        { editTools &&
          <div className='project__nav'>
            <div className='project__nav-title'>
              <Edit id={id} onSuccess={confirmEdit} />
            </div>
            <div className='project__nav-tools'>
              <button onClick={toggleEdit} className='entity__nav-button'>Close</button>
            </div>
          </div>
        }

        <div className='project__content'>
          <div className={classnames('project__tools-wrap', {'project__tools-wrap--active': isActiveTools})}>
            { isActiveTools && !removeTools && !addTaskTools &&
              <div className='project__tools'>
                <button onClick={toggleAddTaskTooks} className='entity__nav-button'>Add task</button>
                <button onClick={toggleEdit} className='entity__nav-button'>Edit</button>
                <button onClick={toggleRemove} className='entity__nav-button'>Delete</button>
                <button onClick={toggleTools} className='entity__nav-button'>Close</button>
              </div>
            }

            { addTaskTools &&
              <div className='project__tools'>
                <Tasks.Create projectId={id} onSuccess={toggleAddTaskTooks} />
                <button onClick={toggleAddTaskTooks} className='entity__nav-button'>Close</button>
              </div>
            }

            { removeTools &&
              <div className='project__tools'>
                <button onClick={confirmRemove} className='entity__nav-button'>Confirm</button>
                <button onClick={toggleRemove} className='entity__nav-button'>Close</button>
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
