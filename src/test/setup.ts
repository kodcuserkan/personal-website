import { expect, afterEach, beforeEach } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';

expect.extend(matchers);

const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => { store[key] = value; },
    removeItem: (key: string) => { delete store[key]; },
    clear: () => { store = {}; },
    get length() { return Object.keys(store).length; },
    key: (i: number) => Object.keys(store)[i] ?? null,
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });
Object.defineProperty(window, 'navigator', {
  value: { language: 'en-US' },
  writable: true,
});

// Prevent history.pushState from modifying window.location.pathname in jsdom
history.pushState = function (_state: unknown, _title: string, url?: string | URL) {
  if (url) {
    const parsed = typeof url === 'string' ? new URL(url, 'http://localhost/') : url;
    Object.defineProperty(window, 'location', {
      value: {
        ...window.location,
        pathname: parsed.pathname,
        href: parsed.href,
      },
      writable: true,
      configurable: true,
    });
  }
};

beforeEach(() => {
  localStorageMock.clear();
  // Reset pathname to / for each test
  Object.defineProperty(window, 'location', {
    value: {
      pathname: '/',
      href: 'http://localhost/',
      hash: '',
      search: '',
    },
    writable: true,
    configurable: true,
  });
});

afterEach(() => {
  cleanup();
  localStorageMock.clear();
});