import { combineReducers } from 'redux'
import { reducer as counter } from '../features/counter'

export const createRootReducer = () =>
  combineReducers({
    counter
  })
