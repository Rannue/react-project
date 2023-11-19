import axios from 'axios';
import { characterSlice } from './charscterSlice';
import { AppDispatch } from '../store';
import { ICharacter } from '../../types/types';

export const fetchCharacters = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(characterSlice.actions.charactersFetching());
    const response = await axios.get<ICharacter[]>(
      'https://rickandmortyapi.com/api/character'
    );
    dispatch(characterSlice.actions.charactersFetchingSuccess(response.data));
  } catch (e) {
    dispatch(characterSlice.actions.charactersFetchingError('error'));
  }
};
