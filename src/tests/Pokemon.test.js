import { screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste o componente Pokemon.js', () => {
  it('Teste se é renderizado um card com as informações do pokémon.', () => {
    renderWithRouter(<App />);
    const pokemonName = screen.getByTestId('pokemon-name');
    expect(pokemonName).toBeDefined();
    const pokemonType = screen.getByTestId('pokemon-type');
    expect(pokemonType).toBeDefined();
    const pokemonAverage = screen.getByTestId('pokemon-weight');
    expect(pokemonAverage).toBeDefined();
    const pokemonImage = screen.getByAltText(/sprite/i);
    expect(pokemonImage).toBeDefined();
  });
  it('Teste se tem o link com os detalhes do pokémon.', () => {
    renderWithRouter(<App />);
    const linkDetails = screen.getByRole('link', { name: /more details/i });
    expect(linkDetails).toBeInTheDocument();
  });
});
