import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste o componente Pokedex.js', () => {
  it('Teste se página contém um heading h2 com o texto Encountered pokémons.', () => {
    renderWithRouter(<App />);
    const head = screen.getByRole('heading', { name: /Encountered pokémons/i, level: 2 });
    expect(head).toBeInTheDocument();
  });
  it('Exibir o próximo Pokémon da lista quando botão Próximo é clicado.', () => {
    renderWithRouter(<App />);
    const buttonNext = screen.getByRole('button', { name: /Próximo pokémon/i });
    expect(buttonNext).toBeInTheDocument();
    const initPokemon = screen.getByTestId('pokemon-name').textContent;
    userEvent.click(buttonNext);
    const nextPokemon = screen.getByTestId('pokemon-name').textContent;
    expect(nextPokemon).not.toBe(initPokemon);
  });
  it('Teste se é mostrado apenas um Pokémon por vez.', () => {
    renderWithRouter(<App />);
    const pokemonScreen = screen.getAllByRole('img');
    expect((pokemonScreen).length).toBe(1);
  });
  it('Teste se a Pokédex tem os botões de filtro.', () => {
    renderWithRouter(<App />);
    const electric = screen.getByRole('button', { name: /electric/i });
    const fire = screen.getByRole('button', { name: /fire/i });
    const bug = screen.getByRole('button', { name: /bug/i });
    const poison = screen.getByRole('button', { name: /poison/i });
    const psychic = screen.getByRole('button', { name: /psychic/i });
    const normal = screen.getByRole('button', { name: /normal/i });
    const dragon = screen.getByRole('button', { name: /dragon/i });
    expect(electric).toBeInTheDocument();
    expect(fire).toBeInTheDocument();
    expect(bug).toBeInTheDocument();
    expect(poison).toBeInTheDocument();
    expect(psychic).toBeInTheDocument();
    expect(normal).toBeInTheDocument();
    expect(dragon).toBeInTheDocument();
    const buttonNext = screen.getByRole('button', { name: /Próximo pokémon/i });
    userEvent.click(electric);
    const typePokemon = screen.getByTestId('pokemon-type').textContent;
    userEvent.click(buttonNext);
    expect(typePokemon).toBe(typePokemon);
  });
  it('Teste se a Pokédex contém um botão para resetar o filtro.', () => {
    renderWithRouter(<App />);
    const all = screen.getByRole('button', { name: /all/i });
    expect(all).toBeInTheDocument();
    userEvent.click(all);
    const buttonReset = screen.getAllByTestId('pokemon-type-button');
    expect(all).not.toHaveAttribute(buttonReset);
  });
});
