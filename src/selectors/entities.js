import dotProp from 'dot-prop-immutable'

export const choosedEntity = (state, name) => {
  const id = dotProp.get(state.entities, `${name}.choosedId`)
  if (!id) { return }
  return dotProp.get(state.entities, `${name}.byId.${id}`)
}
