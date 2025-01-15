// src/redux/exampleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0, // Örnek bir state
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, setValue } = exampleSlice.actions;

export default exampleSlice.reducer;
