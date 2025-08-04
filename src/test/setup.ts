import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock Geist font
vi.mock('geist/font/sans', () => ({
  GeistSans: {
    className: 'mock-geist-sans',
  },
}));