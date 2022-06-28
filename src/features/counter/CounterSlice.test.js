import CounterSlice, { decrement, increment } from './CounterSlice'

describe('Counter slice', () => {
  it('Should increment counter value', () => {
    const initialState = { value: 0 }

    const res = CounterSlice(initialState, increment)
    expect(res).toStrictEqual({ value: 1 })
  })

  it('Should decrement counter value', () => {
    const initialState = { value: 0 }

    const res = CounterSlice(initialState, decrement)
    expect(res).toStrictEqual({ value: -1 })
  })
})
