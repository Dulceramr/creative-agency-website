import './StepCard.scss';

const StepCard = ({ number, title, description }) => {
  return (
    <div className="step-card">
      <div className="step-card__number">{number}</div>
      <h3 className="step-card__title">{title}</h3>
      
      <div className="step-card__content">
        <p className="step-card__description">{description}</p>
      </div>
    </div>
  );
};

export default StepCard;