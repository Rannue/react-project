import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../pages/home-page/componets/searchBar';
import { HomePageContextProvider } from '../context/contextProvider';
import { BrowserRouter } from 'react-router-dom';
import { expect } from 'vitest';

test('verify that clicking the Search button saves the entered value to the local storage', async () => {
  render(
    <BrowserRouter>
      <HomePageContextProvider>
        <SearchBar />
      </HomePageContextProvider>
    </BrowserRouter>
  );

  const inputElement = screen.getByRole('textbox');
  const searchButton = screen.getByTestId('search-button');

  await userEvent.type(inputElement, 'test-search');
  await userEvent.click(searchButton);

  const savedSearchValue = localStorage.getItem('inputValue');
  expect(savedSearchValue).toBe('test-search');
});

test('check that the component retrieves the value from the local storage upon mounting', async () => {
  localStorage.setItem('inputValue', 'initial-value');

  render(
    <BrowserRouter>
      <HomePageContextProvider>
        <SearchBar />
      </HomePageContextProvider>
    </BrowserRouter>
  );

  const inputElement: HTMLInputElement = screen.getByRole('textbox');
  expect(inputElement.value).toBe('initial-value');
});
