import React from 'react';
import './StepCard.scss';

const StepCard = ({ number, title, description }) => {
  return (
    <div className="step-card">
      <div className="step-card__number">{number}</div>
      
      <div className="step-card__content">
        <h3 className="step-card__title">{title}</h3>
        <p className="step-card__description">{description}</p>
      </div>
    </div>
  );
};

export default StepCard;