import test from 'tape'
import { createStore } from 'redux'

import reducer from '../src'
import { state } from './mock'

test('reducer', (t) => {
  const store = createStore(reducer)
  t.deepEqual(store.getState(), state)
  t.end()
})
