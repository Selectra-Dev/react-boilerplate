import { DECREMENT, INCREMENT } from './CounterActions'
import CounterReducer from './CounterReducer'

describe('Counter reducer', () => {
  it('Should increment counter value', () => {
    const initialState = { value: 0 }
    const action = {
      type: INCREMENT
    }

    const res = CounterReducer(initialState, action)
    expect(res).toStrictEqual({ value: 1 })
  })

  it('Should decrement counter value', () => {
    const initialState = { value: 0 }
    const action = {
      type: DECREMENT
    }

    const res = CounterReducer(initialState, action)
    expect(res).toStrictEqual({ value: -1 })
  })
})
