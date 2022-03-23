import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste o componente Pokemon.js', () => {
  it('Teste se é renderizado um card com as informações do pokémon.', () => {
    renderWithRouter(<App />);
    const pokemonName = screen.getByTestId('pokemon-name').textContent;
    expect(pokemonName).toBe('Pikachu');
    // console.log(pokemonName);
    const pokemonType = screen.getByTestId('pokemon-type').textContent;
    expect(pokemonType).toBe('Electric');
    // console.log(pokemonType);
    const pokemonAverage = screen.getByTestId('pokemon-weight').textContent;
    expect(pokemonAverage).toBe('Average weight: 6.0 kg');
    // console.log(pokemonAverage);
    const pokemonImage = screen.getByRole('img');
    expect(pokemonImage.alt).toBe('Pikachu sprite');
    expect(pokemonImage.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    // console.log(pokemonImage);
  });
  it('Teste o link "more details" do pokémon e se redirecionado a URL do pokemon', () => {
    renderWithRouter(<App />);
    const linkDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkDetails);
    expect(linkDetails.href).toBe('http://localhost/pokemons/25');
  });
  it('Teste se existe um ícone de estrela nos Pokémons favoritados.', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pokemons/4');
    const favorite = screen.getByText(/Pokémon favoritado?/i);
    userEvent.click(favorite);
    const checked = screen.getAllByRole('img')[1];
    expect(checked.src).toBe('http://localhost/star-icon.svg');
    expect(checked.alt).toBe('Charmander is marked as favorite');
  });
});
