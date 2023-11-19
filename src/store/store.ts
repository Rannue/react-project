import { combineReducers, configureStore } from '@reduxjs/toolkit';
import characterReducer from './reducers/charscterSlice';
import searchValueReducer from './reducers/searchValueValue';

const rootReducer = combineReducers({
  characterReducer,
  searchValueReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
