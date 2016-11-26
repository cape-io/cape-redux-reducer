import { REPLACE_DB, UPDATE_PROP, UPDATE_TITLE } from './actions'
import { set, setIn } from 'cape-redux'

const defaultState = {
  title: 'Default Title',
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case REPLACE_DB:
    case UPDATE_TITLE:
      return set('title', state, action.payload)
    case UPDATE_PROP:
      return setIn(action.payload.path, state, action.payload.value)
    default:
      return state
  }
}
