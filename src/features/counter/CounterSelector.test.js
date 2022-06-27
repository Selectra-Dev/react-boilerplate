import {
  counterSelector,
  valueCounterSelector

} from './CounterSelector'
let state
describe('Counter selectors', () => {
  beforeEach(() => {
    state = {
      counter: {
        value: 1
      }
    }
  })

  it('Should get counterSelector', () => {
    expect(counterSelector(state)).toEqual(state.counter)
  })

  it('Should get valueCounterSelector', () => {
    expect(valueCounterSelector(state)).toEqual(state.counter.value)
  })
})
