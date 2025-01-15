import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // Tarayıcı localStorage veya sessionStorage
import { persistReducer } from 'redux-persist';
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root', // Anahtar
  storage,     // Depolama tipi
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
