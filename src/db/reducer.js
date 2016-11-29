import { set, setIn } from 'cape-redux'
import { REPLACE_DB, UPDATE_PROP, UPDATE_TITLE } from './actions'

const defaultState = {
  title: 'Default Title',
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case REPLACE_DB:
      return action.payload
    case UPDATE_TITLE:
      return set('title', state, action.payload)
    case UPDATE_PROP:
      return setIn(action.payload.path, state, action.payload.value)
    default:
      return state
  }
}
