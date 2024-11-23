import { render } from '@testing-library/react';
import Main from '../components/Main'; // Adjust the path if necessary
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter

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

  // Check if localStorage.setItem was called with the correct key 'bookingDetails'
  expect(localStorage.setItem).toHaveBeenCalledWith(
    'bookingDetails',
    expect.any(String) // We expect it to be a string (JSON)
  );

  // Check if 'bookingDetails' is in localStorage
  expect(localStorage.setItem).toHaveBeenCalledWith(
    'bookingDetails',
    expect.stringContaining('destination') // Check if destination is part of the stored value
  );
});
