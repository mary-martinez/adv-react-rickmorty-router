import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should navigate between a list view and a detail view', async () => {
    render(<App />)
    screen.getByText(/loading/i);

    await screen.findByText('Morty Smith');

  })
})