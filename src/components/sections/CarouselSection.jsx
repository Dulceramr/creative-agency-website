import React, { useState } from 'react';
import CarouselCard from '../ui/CarouselCard';
import CarouselControls from '../ui/CarouselControls';
import './CarouselSection.scss';

const CarouselSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/images/carousel/brand-book.jpeg',
      title: 'Brand naming & guidelines',
      category: 'Brand identity',
      description: 'Learn how we created a memorable brand name and comprehensive guidelines for consistency.'
    },
    {
      id: 2,
      image: '/images/carousel/merchandise.jpeg',
      title: 'Brand identity & merchandise',
      category: 'Brand identity', 
      description: 'Discover our approach to creating cohesive brand identity across physical merchandise.'
    },
    {
      id: 3,
      image: '/images/carousel/web-design.jpeg', 
      title: 'Brand identity & web design',
      category: 'Web design',
      description: 'See how we integrate brand identity into responsive and engaging web experiences.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="carousel-section" id="projects">
      <div className="carousel-section__container container">
        
        {/* Imagen del lado izquierdo - SOLO IMAGEN */}
        <div className="carousel-section__image-container">
          <div className="carousel-section__image-wrapper">
            <img 
              src={currentSlideData.image} 
              alt={currentSlideData.title}
              className="carousel-section__image"
              loading="lazy"
            />
          </div>
        </div>
        
        {/* Contenido del carrusel del lado derecho */}
        <div className="carousel-section__content">
          
          {/* Tarjeta actual del carrusel */}
          <CarouselCard
            key={currentSlideData.id}
            title={currentSlideData.title}
            category={currentSlideData.category}
            description={currentSlideData.description}
          />
          
          {/* Controles del carrusel */}
          <CarouselControls
            currentSlide={currentSlide + 1}
            totalSlides={slides.length}
            onPrev={prevSlide}
            onNext={nextSlide}
          />
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;