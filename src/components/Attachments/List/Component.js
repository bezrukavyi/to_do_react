import React, { Component } from 'react'

import Attachment from '../Attachment'

const List = (props) => {
  const { attachmentsIds, taskId } = props

  return (
    <div>
      <div className='attachments__list-wrap'>
        { attachmentsIds.length == 0
          ? <span className='attachments__list-empty-title'>You have not any attachments</span>
          : attachmentsIds.map((id) => <Attachment key={id} id={id} />)
        }
      </div>
    </div>
  )
}

export default List
