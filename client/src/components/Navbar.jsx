import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../Navbar';

describe('Navbar component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
  });

  it('renders logo image', () => {
    const logoImg = screen.getByAltText('Logo');
    expect(logoImg).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Contact Me')).toBeInTheDocument();
  });
});