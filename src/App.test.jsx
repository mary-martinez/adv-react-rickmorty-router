import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('should navigate between a list view and a detail view', async () => {
    render(
      <MemoryRouter initialEntries={['/characters']}>
        <App />
      </MemoryRouter>
    );
    const loading = screen.getByText(/loading/i);
    expect(loading).toBeInTheDocument();

    const name = await screen.findByText('Morty Smith');
    expect(name).toBeInTheDocument();

    const links = screen.getAllByRole('link');
    expect(links.length).toEqual(20);

    const link = await screen.findByText('Morty Smith');
    userEvent.click(link);
    await screen.findAllByAltText('Morty Smith image');
  });
});
