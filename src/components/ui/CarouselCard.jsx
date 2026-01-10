import React from 'react';
import './CarouselCard.scss';

const CarouselCard = ({ title, category, description }) => {
  return (
    <div className="carousel-card">
      <div className="carousel-card__header">
        <span className="carousel-card__category">{category}</span>
        <h3 className="carousel-card__title">{title}</h3>
      </div>
      
      <p className="carousel-card__description">{description}</p>
    </div>
  );
};

export default CarouselCard;