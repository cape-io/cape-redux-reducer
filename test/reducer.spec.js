import test from 'tape'
import { forEach } from 'lodash'
import { createStore } from 'redux'

import reducer from '../src'
import { state } from './mock'

test('reducer', (t) => {
  const store = createStore(reducer)
  const appState = store.getState()
  forEach(state, (moduleState, key) => {
    t.deepEqual(appState[key], moduleState, key)
  })
  t.end()
})
