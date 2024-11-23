import React from 'react';

const Card = ({ r }) => {
  return (
    <div className="card-list">
      <div className="card-item">
        <img src={r.image} alt={r.name} className="user-image" />
        <h2 className="user-name">{r.name}</h2>
        <p className="review">{r.review}</p>
        <div className="card-bottom">
          <p className="created-at">{r.createdAt}</p>
          <p className="stars">
            {'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
