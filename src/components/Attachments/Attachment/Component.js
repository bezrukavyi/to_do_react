import React, { Component } from 'react'

import { Buttons, CustomComponent } from 'components'

class Attachment extends CustomComponent.ForManage {
  render() {
    const { name, file } = this.props
    const { removeTools } = this.state
    const { toggleRemove, confirmRemove } = this

    return (
      <div className='attachments__item-wrap'>
        { !removeTools &&
          <div className='attachment__content'>
            <div className='attachment__info'>
              <span className='attachment__title'>{ name }</span>
            </div>

            <div className='attachment__tools'>
              <a href={file.url} className='attachment__title attachment__nav-button'>{ file.fileName }</a>
              <button onClick={toggleRemove} className='attachment__nav-button'>Remove</button>
            </div>
          </div>
        }

        { removeTools &&
          <div className='attachment__tools'>
            <span>{ name } </span>
            <div>
              <button onClick={confirmRemove} className='attachment__nav-button'>Confirm</button>
              <button onClick={toggleRemove} className='attachment__nav-button'>Close</button>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Attachment
