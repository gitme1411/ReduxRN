import {createSlice} from '@reduxjs/toolkit';

export const conuterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.counter = state.counter + 1;
    },
    decrement: (state, action) => {
      if (state.counter > 0) {
        state.counter = state.counter - 1;
      }
    },
  },
});

export const {increment, decrement} = conuterSlice.actions;
export const counter = state => state.counter;
export default conuterSlice.reducer;
