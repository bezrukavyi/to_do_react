const createReducer = (initialState, defs) => (state = initialState, { type, payload }) => {
  const defsFunction = defs[type]
  if (defsFunction) {
    return defsFunction(state, payload)
  } else {
    return state
  }
}


export default createReducer
