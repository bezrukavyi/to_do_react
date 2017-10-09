import { isObject, isArray, reduce, mapValues, groupBy } from 'lodash'

import { camelCaseKeys } from 'utils'

const normalizeEntity = (entity) => {
  const normalized = {
    id: entity.id,
    type: entity.type,
  }

  Object.keys(entity.attributes || []).forEach((key) => {
    normalized[key] = entity.attributes[key]
  })

  Object.keys(entity.relationships || []).forEach((key) => {
    const value = entity.relationships[key]
    if (isArray(value.data)) {
      normalized[key] = value.data.map((item) => item.id)
    } else if (isObject(value.data)) {
      normalized[key] = value.data.id
    }
  })

  return normalized
}

const normalizeResponse = ({ data, included }) => {
  let entities = []
    .concat((isArray(data) ? data : [data]).map(normalizeEntity))
    .concat((included || []).map(normalizeEntity))

  entities = groupBy(entities, (value) => value.type)
  entities = mapValues(entities, (value) =>
    reduce(value, (result, resultValue) => {
      const formatResult = result
      formatResult[resultValue.id] = camelCaseKeys(resultValue)
      return formatResult
    }, {})
  )

  const results = mapValues(entities, (value) =>
    Object.keys(value).map((key) => parseInt(key, 10) || key)
  )
  return { results, entities }
}

const normalize = (obj) => {
  if (!isObject(obj)) {
    throw new Error('Normalize JSON API accepts an object as its input.')
  }
  return normalizeResponse(obj)
}

export default normalize
