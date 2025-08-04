import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from './page';

describe('Home Page', () => {
  it('renders welcome message', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to Miovox')).toBeInTheDocument();
  });

  it('renders AI-powered voice solutions heading', () => {
    render(<Home />);
    expect(screen.getByText('AI-Powered Voice Solutions')).toBeInTheDocument();
  });
});