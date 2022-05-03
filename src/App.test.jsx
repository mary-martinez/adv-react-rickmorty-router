import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should navigate between a list view and a detail view', async () => {
    render(<App />)
    const loading = screen.getByText(/loading/i);
    expect(loading).toBeInTheDocument();

    const name = await screen.findByText('Morty Smith');
    expect(name).toBeInTheDocument();
    const imageMorty = screen.getByAltText('Morty Smith image');
    expect(imageMorty).toBeInTheDocument();
    const images = screen.getAllByAltText(/image/i);
    expect(images.length).toEqual(20);
  })
})