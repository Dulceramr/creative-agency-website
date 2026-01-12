import React from 'react';
import './CarouselControls.scss';

const CarouselControls = ({ onPrev, onNext }) => {
  return (
    <div className="carousel-controls">
      {/* Botones de navegación */}
      <div className="carousel-controls__buttons">
        <button
          className="carousel-controls__button carousel-controls__button--prev"
          onClick={onPrev}
          aria-label="Previous slide"
        >
          <span className="carousel-controls__arrow">&lt;</span>
        </button>
        
        <button
          className="carousel-controls__button carousel-controls__button--next"
          onClick={onNext}
          aria-label="Next slide"
        >
          <span className="carousel-controls__arrow">&gt;</span>
        </button>
      </div>
      
    </div>
  );
};

export default CarouselControls;