
import currencyReducer from '../currency/currencySlise';
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

 
const persistConfig = {
  key: 'root',
  version: 1,
    storage,
  whitelist: ["baseCurrency"]
}

const persistedReducer = persistReducer(persistConfig, currencyReducer);

export const store = configureStore({
    reducer: {
        curency: persistedReducer
    },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);