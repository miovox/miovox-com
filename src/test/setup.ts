import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock matchMedia for next-themes
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock Geist font
vi.mock('geist/font/sans', () => ({
  GeistSans: {
    className: 'mock-geist-sans',
  },
}));

// Mock Next.js navigation hooks
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
    prefetch: vi.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}));

// Mock Next.js Image component
vi.mock('next/image', () => ({
  default: ({ src, alt, priority, fill, ...props }: any) => {
    const React = require('react');
    const imgProps = {
      src,
      alt,
      ...props,
      // Convert boolean props to strings to avoid React warnings
      ...(priority && { 'data-priority': 'true' }),
      ...(fill && { 'data-fill': 'true' }),
    };
    return React.createElement('img', imgProps);
  },
}));