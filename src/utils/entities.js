import normalize from 'json-api-normalizer';
import { transform, pickBy, keys, forIn, filter } from 'lodash'
import dotProp from 'dot-prop-immutable'

const dataFetch = (data, attribute) => data[attribute] || data.data[attribute]

const sliceEnity = (entities, entity) => {
  pickBy(entities, (_entity, id) => id == entity.id)
}

const normalize_entities = (state, data) => {
  return transform(normalize(data), (result, entities, name) => {
    const state_entites = state[name] || {}

    return result[name] = {
      byId: { ...state_entites.byId, ...entities },
      allIds: { ...state_entites.allIds, ...keys(entities) },
      choosedId: null,
    }
  }, {})
}

const update_entities = (state, data) => {
  return transform(normalize(data), (result, entities, name) => {
    const state_entites = state[name] || {}
    const entity = entities[dataFetch(data, 'id')]

    return result[name] = {
      ...state[name],
      byId: {
        ...state_entites.byId,
        [entity.id]: {
          ...dotProp.get(state, `${name}.byId.${entity.id}`),
          ...entity
        }
      }
    }
  }, {})
}

export const getList = (state, data) => {
  return { ...state, ...normalize_entities(state, data) }
}

export const create = (state, data) => {
  const entities = state[dataFetch(data, 'type')] || {}

  return {
    ...state,
    [dataFetch(data, 'type')]: {
      ...entities,
      byId: { ...entities.byId, ...normalize(data) },
      allIds: entities.allIds.push(dataFetch(data, 'id')),
      choosedId: dataFetch(data, 'id'),
    }
  }
}

export const get = (state, data) => ({
  ...state,
  ...update_entities(state, data)
})

export const update = (state, data) => get(state, data)

export const destroy = (state, data) => {
  const entities = state[dataFetch(data, 'type')] || {}

  return {
    ...state,
    [dataFetch(data, 'type')]: {
      ...entities,
      byId: { ...entities.byId, ...sliceEnity(entities, data) },
      allIds: filter(entities.allIds, (id) => id != dataFetch(data, 'id')),
    }
  }
}

export const choose = (state, data) => ({
  ...state,
  [dataFetch(data, 'type')]: {
    ...state[dataFetch(data, 'type')],
    choosedId: dataFetch(data, 'id'),
  }
})
