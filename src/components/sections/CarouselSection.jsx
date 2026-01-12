import { useState } from 'react';
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
    },
    {
      id: 2,
      image: '/images/carousel/merchandise.jpeg',
      title: 'Brand identity & merchandise',
    },
    {
      id: 3,
      image: '/images/carousel/web-design.jpeg', 
      title: 'Brand identity & web design',
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
      <div className="carousel-section__container">
        
        {/* CONTENIDO NEGRO (izquierda, más corto) */}
        <div className="carousel-section__content">
          <CarouselCard
            key={currentSlideData.id}
            title={currentSlideData.title}
          />
          
          <CarouselControls
            currentSlide={currentSlide + 1}
            totalSlides={slides.length}
            onPrev={prevSlide}
            onNext={nextSlide}
          />
        </div>
        
        {/* IMAGEN (derecha, más alta) */}
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
        
      </div>
    </section>
  );
};

export default CarouselSection;