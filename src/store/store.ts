import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchValueReducer from './reducers/searchValueValue';
import { characterAPI } from '../services/CharacterService';
import { setupListeners } from '@reduxjs/toolkit/query';

const rootReducer = combineReducers({
  searchValueReducer,
  characters: characterAPI.reducer,
  [characterAPI.reducerPath]: characterAPI.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(characterAPI.middleware),
});

setupListeners(store.dispatch);

export default store;

export type RootState = ReturnType<typeof rootReducer>;
