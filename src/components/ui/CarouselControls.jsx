import React from 'react';
import './CarouselControls.scss';

const CarouselControls = ({ currentSlide, totalSlides, onPrev, onNext }) => {
  return (
    <div className="carousel-controls">
      
      {/* Indicador de slide */}
      <div className="carousel-controls__counter">
        <span className="carousel-controls__current">{String(currentSlide).padStart(2, '0')}</span>
        <span className="carousel-controls__separator">/</span>
        <span className="carousel-controls__total">{String(totalSlides).padStart(2, '0')}</span>
      </div>
      
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