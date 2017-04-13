import { partial, property } from 'lodash'
import { select } from 'cape-select'

export const selectConfig = property('config')
export const selectConfigPath = partial(select, selectConfig)

export const selectDb = property('db')
export const selectDbPath = partial(select, selectDb)
