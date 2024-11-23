import React, { useState, useReducer } from 'react';
import { useNavigate } from 'react-router-dom'; 
import BookingForm from './BookingForm';
import waiter from '../assets/waiter.jpg';
import { initializeTimes } from '../constants';

const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    return initializeTimes(); 
  }
  return state;
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const [isDisabled, setIsDisabled] = useState(true);
  const [guestsLimit, setGuestsLimit] = useState(false);
  const [booking, setBooking] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: '',
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;

    setBooking((prev) => {
      const updatedBooking = {
        ...prev,
        [name]: value,
      };

      const allFilled = Object.values(updatedBooking).every(
        (val) => val !== '' && val !== '0'
      );
      const isGuestsValid = name === 'guests' ? parseInt(value) <= 12 : true;
      setIsDisabled(!(allFilled && isGuestsValid));
      return updatedBooking;
    });

    if (name === 'guests') {
      const guestsNumber = parseInt(value);
      if (guestsNumber > 12) {
        setGuestsLimit(true);
        setIsDisabled(true);
      } else {
        setGuestsLimit(false);
        setIsDisabled(false);
      }
    }

    if (name === 'date') {
      dispatch({ type: 'UPDATE_TIMES', payload: value });
    }
  };


  const submitAPI = async (formData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Submitting form data:', formData);
        resolve(true); 
      }, 1000);
    });
  };

  const submitForm = async (event) => {
    event.preventDefault(); 
    try {
      const response = await submitAPI(booking); 
      if (response) {
        localStorage.setItem('bookingDetails', JSON.stringify(booking));
        navigate('/confirmation'); 
      } else {
        alert('Booking failed! Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };
  return (
    <main className="main">
      <section className="main-section-introduction">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>

        <p>
          We are a proud, family-owned Mediterranean restaurant dedicated to bringing you the rich
          flavors of traditional recipes, lovingly passed down through generations, all expertly
          crafted and served with a delightful modern twist to create an unforgettable dining
          experience.
        </p>

        <div className="main-section-image">
          <img src={waiter} alt="" />
        </div>
      </section>

      <section className="main-section-booking">
        <h1>BOOK A TABLE</h1>
        <BookingForm
          booking={booking}
          handleChange={handleChange}
          submitForm={submitForm}
          isDisabled={isDisabled}
          guestsLimit={guestsLimit}
          availableTimes={availableTimes}
        />
      </section>
    </main>
  );
}

export default Main;
