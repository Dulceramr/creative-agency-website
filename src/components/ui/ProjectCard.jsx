import React, { useState } from 'react';
import './ProjectCard.scss';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article 
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagen del proyecto */}
      <div className="project-card__image-container">
        <div className={`project-card__image project-card__image--${project.image}`}>
          {/* Placeholder */}
          <div className="project-card__image-placeholder">
            <div className="project-card__image-content">
              <div className="project-card__placeholder-design"></div>
              <div className="project-card__placeholder-design"></div>
              <div className="project-card__placeholder-design"></div>
            </div>
          </div>
        </div>
        
        {/* Overlay en hover */}
        <div className={`project-card__overlay ${isHovered ? 'project-card__overlay--visible' : ''}`}>
          <button className="project-card__view-button">
            View Project
          </button>
        </div>
      </div>
      
      {/* Contenido de la card */}
      <div className="project-card__content">
        <div className="project-card__header">
          <span className="project-card__category">
            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </span>
          <h3 className="project-card__title">{project.title}</h3>
        </div>
        
        <p className="project-card__description">{project.description}</p>
        
        <div className="project-card__tags">
          {project.tags.map(tag => (
            <span key={tag} className="project-card__tag">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;