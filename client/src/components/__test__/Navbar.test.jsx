import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';

describe('Navbar component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  });

  it('renders logo image', () => {
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Contact Me')).toBeInTheDocument();
  });
});