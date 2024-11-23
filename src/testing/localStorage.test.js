import { render } from '@testing-library/react';
import Main from '../components/Main'; 
import { MemoryRouter } from 'react-router-dom'

// Mock localStorage
beforeAll(() => {
  global.localStorage = {
    setItem: jest.fn(),
    getItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  };
});

test('should store bookingDetails in localStorage on form submit', () => {
  render(
    <MemoryRouter>
      <Main />
    </MemoryRouter>
  );

    expect(localStorage.setItem).toHaveBeenCalledWith(
    'bookingDetails',
    expect.any(String) 
  );

  expect(localStorage.setItem).toHaveBeenCalledWith(
    'bookingDetails',
    expect.stringContaining('destination') 
  );
});
