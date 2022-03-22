import { screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste o componente About.js e sua renderização.', () => {
  it('Teste se a página contém as informações sobre a Pokédex', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/about');
    const info = screen.getByRole('heading', { name: /About pokédex/i, level: 2 });
    expect(info).toBeInTheDocument();
  });
  it('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/about');
    const paragrafo1 = screen.getByText(/This application simulates a Pokédex/i);
    const paragrafo2 = screen.getByText(/One can filter Pokémons by type/i);
    expect(paragrafo1).toBeDefined();
    expect(paragrafo2).toBeDefined();
  });
  it('Teste se a página contém a imagem de uma Pokédex', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/about');
    const picture = screen.getByAltText(/Pokédex/i);
    expect(picture).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
