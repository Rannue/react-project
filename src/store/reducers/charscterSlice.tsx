import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICharacter } from '../../types/types';

interface ICharacterState {
  characters: ICharacter[];
  isLoading: boolean;
  error: string;
  count: number;
}

const initialState: ICharacterState = {
  characters: [],
  isLoading: false,
  error: '',
  count: 0,
};

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    charactersFetching(state) {
      state.isLoading = true;
    },
    charactersFetchingSuccess(state, action: PayloadAction<ICharacter[]>) {
      state.isLoading = false;
      state.error = '';
      state.characters = action.payload;
    },

    charactersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default characterSlice.reducer;
