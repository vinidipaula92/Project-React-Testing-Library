import { screen } from '@testing-library/react';
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
/*   it('Teste se é exibido todos os cards de pokémons favoritados.', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/favorites');
    const favoritePokemon = screen.getByRole();
  }); */
});
