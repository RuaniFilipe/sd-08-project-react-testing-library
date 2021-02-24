import React from 'react';
import { render } from '@testing-library/react';
import { FavoritePokemons } from '../components';
import renderWithRouter from '../renderWithRouter';
import pokemons from '../data';

describe('test the content of about favorite', () => {
  test('test case has not favorite pokémons ', () => {
    const { getByTestId, getByText } = render(<FavoritePokemons />);
    const favoriteDiv = getByTestId('favorite-div');
    const noFavorite = getByText('No favorite pokemon found');
    expect(favoriteDiv).toContainElement(noFavorite);
  });
  test('test if every favorite pokemon car exist ', () => {
    const selectedPokemons = [pokemons[0], pokemons[1]]; // Pikachu and Charmander on data.js.
    const { getByTestId, getByText } = renderWithRouter(
      <FavoritePokemons pokemons={ selectedPokemons } />,
    );
    const favoriteDiv = getByTestId('favorite-div');
    const favoritePokemonOne = getByText('Pikachu');
    const favoritePokemonTwo = getByText('Charmander');
    expect(favoriteDiv).toContainElement(favoritePokemonOne);
    expect(favoriteDiv).toContainElement(favoritePokemonTwo);
  });
  test('tests if no pokemon is displayed if no pokemon is selected', () => {
    const ZERO = 0;
    const { container } = renderWithRouter(<FavoritePokemons />);
    const favoritePokemons = container.getElementsByClassName('favorite-pokemons').length;
    expect(favoritePokemons).toBe(ZERO);
  });
});
