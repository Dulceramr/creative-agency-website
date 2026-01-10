import React from 'react';
import Button from '../ui/Button';
import './CTASection.scss';

const CTASection = () => {
  const handleScheduleCall = () => {
    // Aquí iría la lógica para abrir formulario o redirigir
  };

  return (
    <section className="cta-section" id="contact">
      <div className="cta-section__container container">
        
        {/* Contenido principal */}
        <div className="cta-section__content">
          <h2 className="cta-section__title">
            Let's build something great together.
          </h2>
          
          <p className="cta-section__description">
            Ready to transform your brand and digital presence? 
            Get in touch with our team to discuss your project and see how we can help.
          </p>
          
          <div className="cta-section__actions">
            <Button 
              variant="primary" 
              onClick={handleScheduleCall}
              className="cta-section__button"
            >
              Schedule a call
            </Button>
          </div>
        </div>
        
        {/* Elementos decorativos (opcionales) */}
        <div className="cta-section__decorations">
          <div className="cta-section__dot cta-section__dot--1"></div>
          <div className="cta-section__dot cta-section__dot--2"></div>
          <div className="cta-section__dot cta-section__dot--3"></div>
        </div>
        
      </div>
    </section>
  );
};

export default CTASection;