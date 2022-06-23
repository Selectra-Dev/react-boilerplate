import { combineReducers } from 'redux'
import { reducer as counter } from '@features/counter'

export const rootReducer = combineReducers({
  counter
})
