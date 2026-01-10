import React from 'react';
import Button from '../ui/Button';
import './HeroSection.scss';

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-section__container container">
        
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
            {/* Placeholder - después poner la imagen real */}
            <div className="hero-section__image-placeholder">
              <div className="hero-section__image-content">
                <div className="hero-section__image-person hero-section__image-person--1"></div>
                <div className="hero-section__image-person hero-section__image-person--2"></div>
                <div className="hero-section__image-computer"></div>
              </div>
            </div>
            
            {/* Para cuando tenga la imagen real:
            <img 
              src="/images/hero-team.jpg" 
              alt="Two professionals working together on a computer"
              className="hero-section__image"
            />
            */}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;