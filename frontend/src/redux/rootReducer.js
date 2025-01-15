// src/redux/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
// Reducer'larınızı buraya ekleyin
import exampleReducer from './exampleSlice'; // Örnek reducer

const rootReducer = combineReducers({
  example: exampleReducer,
});

export default rootReducer;
