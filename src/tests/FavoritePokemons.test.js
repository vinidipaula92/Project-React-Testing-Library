import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste o componente FavoritePokemons.js', () => {
  it('Será exibido mensagem no favorite pokemon found se não tiver pokémons', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/favorites');
    const favorite = screen.getByText(/No favorite pokemon found/i);
    expect(favorite).toBeDefined();
  });
  it('Teste se é exibido todos os cards de pokémons favoritados.', async () => {
    const { history } = renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    userEvent.click(details);
    const checked = screen.getByText(/pokémon favoritado?/i);
    userEvent.click(checked);
    history.push('/favorites');
    const favoritePokemon = screen.getByTestId('pokemon-name').textContent;
    expect(favoritePokemon).toBeDefined();
  });
});
