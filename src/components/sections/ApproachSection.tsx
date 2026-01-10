import React from 'react';
import StepCard from '../ui/StepCard';
import './ApproachSection.scss';

const ApproachSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Brand Strategy',
      description: 'Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key.'
    },
    {
      number: '02', 
      title: 'Brand Design',
      description: 'Keeping the brand design unique and meaningful helps in communicating the brand\'s value effectively.'
    },
    {
      number: '03',
      title: 'Web Design',
      description: 'A beautifully crafted website is the best tool for brand awareness, and our results-driven approach focuses on the bigger picture.'
    }
  ];

  return (
    <section className="approach-section" id="approach">
      <div className="approach-section__container container">
        
        {/* Header de la sección */}
        <div className="approach-section__header">
          <h2 className="approach-section__title">
            Our approach for creating a winning brand
          </h2>
        </div>
        
        {/* Grid de 3 pasos */}
        <div className="approach-section__steps">
          {steps.map((step) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ApproachSection;