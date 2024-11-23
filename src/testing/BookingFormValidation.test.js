import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../components/BookingForm';
import React from 'react';

describe('BookingForm Validation', () => {
  test('it should trigger form submission', () => {
    const mockSubmit = jest.fn();  // Mock the submit function
    
    const booking = {
      date: '2024-11-25',
      time: '12:00',
      guests: 4,
      occasion: 'Birthday',
    };

    render(
      <BookingForm
        booking={booking}
        handleChange={jest.fn()}
        submitForm={mockSubmit}
        isDisabled={false}
        guestsLimit={12}
        availableTimes={['12:00', '14:00', '16:00']}
      />
    );

    const submitButton = screen.getByRole('button', { name: /Make Your Reservation/i });

    // Fire the submit event directly on the form instead of clicking the button
    fireEvent.submit(submitButton); // This simulates the form submit

    // Check if the submit function was called
    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });
});
