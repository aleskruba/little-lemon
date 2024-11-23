import React from 'react';
import { useNavigate } from 'react-router-dom'; 

function Confirmation() {
    const navigate = useNavigate(); 

  return (
    <div className="confirmation">
      <div className="confirmation-content">
        <h1 className="confirmation-heading">Booking Confirmed!</h1>
        <p className="confirmation-message">
          Your booking has been successfully confirmed. Thank you for choosing Little Lemon!
        </p>
        <button className="btn-confirmation" onClick={()=>navigate('/')}>Back to Home</button>
      </div>
    </div>
  );
}

export default Confirmation;
