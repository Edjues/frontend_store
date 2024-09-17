import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

export interface CounterState {
  value: number
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 10
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    
  }
})

// Action creators are generated for each case reducer function
export const { increment } = counterSlice.actions
export const selectCount = (state: RootState) => state.counter.value