import { partial, property } from 'lodash'
import { select } from 'cape-select'

export const selectDb = property('db')
export const selectDbPath = partial(select, selectDb)
