import { combineReducers } from 'redux'
import * as reducerIndex from './reducer'
import { selectYear } from './session'

export * from './db/actions'
export {
  reducerIndex,
  selectYear,
}
const reducer = combineReducers(reducerIndex)

export default reducer
