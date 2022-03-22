import { screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste o componente NotFound.js', () => {
  it('Teste se página contém heading h2 com o texto Page requested not found 😭', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/xablau');
    const fav = screen.getByRole('heading', { name: /Page requested not/i, level: 2 });
    expect(fav).toBeInTheDocument();
  });
  it('Teste se página mostra a imagem Pikachu chorando 😭', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/xablau');
    const picture = screen.getByAltText(/Pikachu crying because the page requested/i);
    expect(picture).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
