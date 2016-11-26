import { createAction } from 'cape-redux'

export const REPLACE_DB = 'db/REPLACE_DB'
export const replaceDb = createAction(REPLACE_DB)

export const UPDATE_TITLE = 'db/UPDATE_TITLE'
export function updateTitle(value) {
  return {
    type: UPDATE_TITLE,
    payload: value,
  }
}

export const UPDATE_PROP = 'db/UPDATE_PROP'
export function updateProp(path, value) {
  return { type: UPDATE_PROP, payload: { path, value } }
}
