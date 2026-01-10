import Button from '../ui/Button';
import './CTASection.scss';

const CTASection = ({ onScheduleCall }) => {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-section__container container">
        
        {/* Contenido principal */}
        <div className="cta-section__content">
          <h2 className="cta-section__title">
            Let's build something great together.
          </h2>
          
          <div className="cta-section__actions">
            <Button 
              variant="primary" 
              onClick={onScheduleCall}
              className="cta-section__button"
            >
              Schedule a call
            </Button>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default CTASection;