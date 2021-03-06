import React, { Component } from 'react'
import { isFunction } from 'lodash'

class ForManage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActiveTools: false,
      editTools: false,
      removeTools: false,
    }
    this.toggleTools = this.toggleTools.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
    this.toggleRemove = this.toggleRemove.bind(this)
    this.confirmRemove = this.confirmRemove.bind(this)
    this.confirmEdit = this.confirmEdit.bind(this)
    if(isFunction(this.inititalize)) { this.inititalize(props) }
  }

  toggleTools(values) {
    this.setState({ isActiveTools: !this.state.isActiveTools })
    if(isFunction(this.props.onToggleTools)) { this.props.onToggleTools(values) }
  }

  toggleEdit(values) {
    this.setState({ editTools: !this.state.editTools })
    if(isFunction(this.props.onToggleEdit)) { this.props.onToggleEdit(values) }
  }

  toggleRemove(values) {
    this.setState({ removeTools: !this.state.removeTools })
    if(isFunction(this.props.onToggleRemove)) { this.props.onToggleRemove(values) }
  }

  confirmRemove(values) {
    if(isFunction(this.props.onConfirmRemove)) { this.props.onConfirmRemove(values) }
  }

  confirmEdit(values) {
    if(isFunction(this.props.onConfirmEdit)) { this.props.onConfirmEdit(values) }
    this.setState({ editTools: false })
  }
}


export default ForManage
