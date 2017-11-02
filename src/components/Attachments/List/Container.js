import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { formAdapter } from 'utils'
import connectWithLifeCycle from 'lifecycle-connector'
import Attachment from 'store/Entities/Attachment'
import List from './Component'

const mapStateToProps = (state, ownProps) => ({
  attachmentsIds: Attachment.selectors.allIds(ownProps.taskId),
})

export default connectWithLifeCycle(mapStateToProps)(List)
