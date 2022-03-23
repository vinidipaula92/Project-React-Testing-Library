import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste o componente PokemonDetails.js', () => {
  it('Teste se as informações do Pokémon selecionado são mostradas na tela.', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pokemons/65');
    const details = screen
      .getByRole('heading', { name: /Alakazam Details/i, level: 2 });
    expect(details).toBeDefined();
    const summary = screen
      .getByRole('heading', { name: /summary/i, level: 2 });
    expect(summary).toBeDefined();
    const pokemonResume = screen
      .getByText(/Closing both its eyes heightens all its other senses/i);
    expect(pokemonResume).toBeDefined();
  });
  it('Teste se tem uma seção com os mapas contendo as localizações do pokémon', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pokemons/65');
    const detailsMap = screen
      .getByRole('heading', { name: /Game Locations of Alakazam/i, level: 2 });
    expect(detailsMap).toBeDefined();
    const mapLocation = screen.getAllByRole('img')[1];
    expect(mapLocation.src).toBe('https://cdn2.bulbagarden.net/upload/4/44/Unova_Accumula_Town_Map.png');
    const mapName = screen.getByText(/Unova Accumula Town/i);
    expect(mapName).toBeDefined();
    const pokemonName = screen.getByTestId('pokemon-name').textContent;
    expect(mapLocation.alt).toBe(`${pokemonName} location`);
  });
  it('Teste se o usuário pode favoritar um pokémon através da página detalhes.', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pokemons/65');
    const checked = screen.getByText(/pokémon favoritado?/i);
    expect(checked).toBeDefined();
    userEvent.click(checked);
  });
});
