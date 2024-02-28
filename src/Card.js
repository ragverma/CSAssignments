// Card.js
import React from 'react';
import './Card.css';

const Card = ({ heading, backgroundColor, content }) => {
  return (
    <div className="card" style={{ backgroundColor }}>
      <h3>{heading}</h3>
      <p>Some quick example text to build on the card title and make up the bulk of the car's content.</p>
    </div>
  );
};

export default Card;
