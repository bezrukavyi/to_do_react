import dotProp from 'dot-prop-immutable'
import { values } from 'lodash'

export const choosedEntity = (state, name, ownProps) => {
  const id = dotProp.get(ownProps, 'match.params.id')
  if (!id) { return }
  return dotProp.get(state.entities, `${name}.byId.${id}`)
}

export const listEntities = (state, name) => {
  const entities = dotProp.get(state.entities, `${name}.byId`)
  if (!entities) { return }
  return values(entities)
}

export const fetchId = (ownProps) => ownProps.match.params.id || ownProps.id
