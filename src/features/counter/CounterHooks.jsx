import { useDispatch, useSelector } from 'react-redux'
import { valueCounterSelector } from './CounterSelector'
import {
  increment,
  decrement
} from './CounterSlice'

const counterHooks = () => {
  const dispatch = useDispatch()
  const count = useSelector(valueCounterSelector)

  const handleIncrement = () => dispatch(increment())
  const handleDecrement = () => dispatch(decrement())

  return {
    count,
    handleIncrement,
    handleDecrement
  }
}

export default counterHooks
