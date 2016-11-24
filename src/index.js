import { combineReducers } from 'redux'
import * as reducerIndex from './reducer'
import { selectYear } from './session'

export {
  reducerIndex,
  selectYear,
}
const reducer = combineReducers(reducerIndex)

export default reducer
