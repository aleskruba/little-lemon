import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../components/BookingForm';  

describe('BookingForm Validation', () => {
  let booking;
  const handleChange = jest.fn();
  const submitForm = jest.fn();
  const availableTimes = ['12:00', '14:00', '16:00'];

  beforeEach(() => {
    booking = {
      date: '',
      time: '',
      guests: '',
      occasion: '',
    };
  });

  test('prevents form submission when date is empty', () => {
    render(
      <BookingForm
        booking={booking}
        handleChange={handleChange}
        submitForm={submitForm}
        isDisabled={false}
        guestsLimit={true}
        availableTimes={availableTimes}
      />
    );

    const submitButton = screen.getByRole('button', { name: /Make Your Reservation/i });

    fireEvent.click(submitButton);


    expect(screen.getByText(/Choose date/i)).toBeInTheDocument();
  });

  test('prevents form submission when time is not selected', () => {
    booking.date = '2024-12-25';  
    render(
      <BookingForm
        booking={booking}
        handleChange={handleChange}
        submitForm={submitForm}
        isDisabled={false}
        guestsLimit={true}
        availableTimes={availableTimes}
      />
    );

    const submitButton = screen.getByRole('button', { name: /Make Your Reservation/i });

    fireEvent.click(submitButton);

  
    expect(screen.getByText(/Choose time/i)).toBeInTheDocument();
  });

  test('prevents form submission when number of guests exceeds the limit', () => {
    booking.date = '2024-12-25';
    booking.time = '12:00';
    booking.guests = '15';  
    render(
      <BookingForm
        booking={booking}
        handleChange={handleChange}
        submitForm={submitForm}
        isDisabled={false}
        guestsLimit={true}
        availableTimes={availableTimes}
      />
    );

    const submitButton = screen.getByRole('button', { name: /Make Your Reservation/i });

    fireEvent.click(submitButton);

       expect(screen.getByText(/Max guests is 12/i)).toBeInTheDocument();
  });

  test('submits the form when all fields are valid', () => {
    booking.date = '2024-12-25';
    booking.time = '12:00';
    booking.guests = '4';
    booking.occasion = 'Birthday';  

    render(
      <BookingForm
        booking={booking}
        handleChange={handleChange}
        submitForm={submitForm}
        isDisabled={false}
        guestsLimit={true}
        availableTimes={availableTimes}
      />
    );

    const submitButton = screen.getByRole('button', { name: /Make Your Reservation/i });
    fireEvent.click(submitButton);

    // Check if the form was submitted
    expect(submitForm).toHaveBeenCalledTimes(1);
  });
});
