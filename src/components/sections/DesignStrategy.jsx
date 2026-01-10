import React from 'react';
import Button from '../ui/Button';
import './DesignStrategy.scss';

const DesignStrategy = () => {
  return (
    <section className="design-strategy" id="strategy">
      <div className="design-strategy__container container">
        
        {/* Imagen de laptop (55% width en desktop) */}
        <div className="design-strategy__image-container">
          <div className="design-strategy__image-wrapper">
            {/* Placeholder de laptop */}
            <div className="design-strategy__laptop">
              <div className="design-strategy__laptop-screen">
                <div className="design-strategy__screen-content">
                  <div className="design-strategy__design-element design-strategy__design-element--1"></div>
                  <div className="design-strategy__design-element design-strategy__design-element--2"></div>
                  <div className="design-strategy__design-element design-strategy__design-element--3"></div>
                </div>
              </div>
              <div className="design-strategy__laptop-base"></div>
            </div>
            
            {/* Para imagen real:
            <img 
              src="/images/laptop-design.jpg" 
              alt="Laptop showing design work and strategy"
              className="design-strategy__image"
            />
            */}
          </div>
        </div>
        
        {/* Contenido de texto (45% width en desktop) */}
        <div className="design-strategy__content">
          <h2 className="design-strategy__title">
            Design is <span className="design-strategy__title-accent">strategic.</span>
          </h2>
          
          <blockquote className="design-strategy__quote">
            <p className="design-strategy__quote-text">
              "A well-crafted design strategy consistently produces desired outcomes 
              and brand awareness. We are firm believers that success lies in creative 
              collaboration with our clients."
            </p>
          </blockquote>
          
          <div className="design-strategy__cta">
            <Button variant="underline">
              Schedule a call
            </Button>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default DesignStrategy;