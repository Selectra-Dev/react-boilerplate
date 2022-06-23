import { createSelector } from 'reselect'

export const counterSelector = (state) => state.counter

export const valueCounterSelector = createSelector(
  [counterSelector],
  (counter) => counter?.value
)
