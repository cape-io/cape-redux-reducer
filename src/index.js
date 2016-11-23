import { combineReducers } from 'redux'
import * as reducerIndex from './reducer'

export {
  reducerIndex,
}
const reducer = combineReducers(reducerIndex)

export default reducer
