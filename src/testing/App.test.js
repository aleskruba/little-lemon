import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import App from '../App';

test('renders header-div element', () => {
  render(
    <MemoryRouter> {/* Wrap the App component inside MemoryRouter */}
      <App />
    </MemoryRouter>
  );

  // Use getByTestId to query the element
  const headerDivElement = screen.getByTestId('header-div');

  // Assert that the element with the "header-div" class is found
  expect(headerDivElement).toBeInTheDocument();
});
