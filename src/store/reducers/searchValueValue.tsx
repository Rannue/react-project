import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IState {
  searchValueSlice: ISearchValueState;
}

export interface ISearchValueState {
  value: string;
}

const initialState: ISearchValueState = {
  value: localStorage.getItem('inputValue') || '',
};

export const searchValueSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    addSearchValue(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { addSearchValue } = searchValueSlice.actions;

export default searchValueSlice.reducer;
