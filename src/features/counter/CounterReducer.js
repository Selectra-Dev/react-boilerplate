import { reducerFactory } from '../../store/ReducerFactory'
import {
  DECREMENT,
  INCREMENT
} from './CounterActions'

const initialState = {
  value: 0
}

const incrementHandler = ({ value }) => {
  return {
    value: value + 1
  }
}

const decrementHandler = ({ value }) => {
  return {
    value: value - 1
  }
}

const handlers = {
  [INCREMENT]: incrementHandler,
  [DECREMENT]: decrementHandler
}

export default reducerFactory(initialState, handlers)