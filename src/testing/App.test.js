import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import App from '../App';

test('renders header-div element', () => {
  render(
    <MemoryRouter> 
      <App />
    </MemoryRouter>
  );

  const headerDivElement = screen.getByTestId('header-div');

  
  expect(headerDivElement).toBeInTheDocument();
});
