import { increment, INCREMENT, decrement, DECREMENT } from './CounterActions'

describe('Counter actions', () => {
  it('Should dispatch an increment action', () => {
    expect(increment().type).toEqual(INCREMENT)
  })

  it('Should dispatch a decrement action', () => {
    expect(decrement().type).toEqual(DECREMENT)
  })
})
