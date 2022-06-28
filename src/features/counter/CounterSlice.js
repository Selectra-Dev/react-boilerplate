import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0
}

const incrementHandler = ({ value }) => ({
  value: value + 1
})

const decrementHandler = ({ value }) => ({
  value: value - 1
})

export const counterSlice = createSlice({
  name: 'checkoutData',
  initialState,
  reducers: {
    increment: incrementHandler,
    decrement: decrementHandler
  }
})

export const {
  increment,
  decrement
} = counterSlice.actions

export default counterSlice.reducer
