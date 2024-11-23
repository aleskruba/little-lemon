import React from 'react';
import { FaCheck } from 'react-icons/fa';

function BookingForm({
  booking,
  handleChange,
  submitForm,
  isDisabled,
  guestsLimit,
  availableTimes,
}) {
  const today = new Date().toISOString().split('T')[0];

  const buttonStyles = {
    opacity: isDisabled ? '0.3' : '1',
    pointerEvents: isDisabled ? 'none' : 'auto',
    color: isDisabled ? 'lightgray' : 'white',
    backgroundColor: isDisabled ? 'gray' : '',
    padding: '10px 20px',
    border: 'none',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    transition: 'background-color 0.3s, transform 0.3s',
  };

  return (
    <form className="form" onSubmit={submitForm}>
      <label htmlFor="res-date">
        Choose date
        <span
          style={booking.date !== '' ? { background: 'green' } : { background: 'white' }}
          className="circle"
        >
          <FaCheck />
        </span>
      </label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={booking.date}
        min={today}
        onChange={handleChange}
        aria-required="true"
      />

      <label htmlFor="res-time">
        Choose time
        <span
          style={booking.time !== '' ? { background: 'green' } : { background: 'white' }}
          className="circle"
        >
          <FaCheck />
        </span>
      </label>
      <select
        id="res-time"
        name="time"
        value={booking.time}
        onChange={handleChange}
        aria-required="true"
      >
        <option value="">Select time</option>
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label htmlFor="guests">
        Number of guests
        <span
          style={booking.guests > 0 && booking.guests < 13 ? { background: 'green' } : { background: 'white' }}
          className="circle"
        >
          <FaCheck />
        </span>
      </label>
      <input
        type="text"
        placeholder="number of guests"
        name="guests"
        value={booking.guests}
        onChange={handleChange}
      />
      {guestsLimit && <p className='limit'>Max guests is 12</p>}

      <label htmlFor="occasion">Occasion
      <span
          style={booking.occasion ? { background: 'green' } : { background: 'white' }}
          className="circle"
        >
          <FaCheck />
        </span>
      </label>
      <select
        name="occasion"
        value={booking.occasion}
        onChange={handleChange}
        aria-required="true"
      >
        <option value="">Select occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Engagement">Engagement</option>
      </select>

      <input
        type="submit"
        value="Make Your Reservation"
        className="btn-submit"
        disabled={isDisabled}
        aria-disabled={isDisabled}
        style={buttonStyles}
      />
    </form>
  );
}

export default BookingForm;
