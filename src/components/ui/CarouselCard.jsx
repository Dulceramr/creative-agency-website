import './CarouselCard.scss';

const CarouselCard = ({ title, category }) => {
  return (
    <div className="carousel-card">
      <div className="carousel-card__header">
        <span className="carousel-card__category">{category}</span>
        <h3 className="carousel-card__title">{title}</h3>
      </div>
      
    </div>
  );
};

export default CarouselCard;