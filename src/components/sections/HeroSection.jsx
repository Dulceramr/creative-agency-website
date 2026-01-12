import React from 'react';
import Button from '../ui/Button';
import './HeroSection.scss';

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-section__container">
        
        {/* Contenido izquierdo - Texto */}
        <div className="hero-section__content">
          <h1 className="hero-section__title">
            Branding & website design agency
          </h1>
          
          <p className="hero-section__description">
            We specialize in visual storytelling by creating cohesive brand and 
            website design solutions for small business, giving lasting impressions 
            to audiences in a digital world.
          </p>
          
          <div className="hero-section__cta">
            <Button variant="primary">
              Learn more
            </Button>
          </div>
        </div>
        
        {/* Contenido derecho - Imagen */}
        <div className="hero-section__image-container">
          <div className="hero-section__image-wrapper">
                  <img 
                    src="./images/hero/team-working.jpeg" 
                    alt="Two professionals working together on a computer"
                    className="hero-section__image"
                    loading="lazy" 
                  />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;