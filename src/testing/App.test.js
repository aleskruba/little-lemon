import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Required for routing context
import App from '../App';

test('renders Header component', () => {
  render(
    <MemoryRouter initialEntries={['/']} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <App />
  </MemoryRouter>
  );
  
  // Check if the Header is rendered using the test ID
  const headerElement = screen.getByTestId('header-div');
  expect(headerElement).toBeInTheDocument(); // Assert that Header is rendered
});
