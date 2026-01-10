import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import ProjectsSection from '../components/sections/ProjectsSection';
import ContactModal from '../components/ui/ContactModal';
import './ProjectsPage.scss';

const ProjectsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleScheduleCall = () => {
        setIsModalOpen(true);
    };
  return (
    <div className="projects-page">
      <Header onScheduleCall={handleScheduleCall} />
      
      <main className="projects-page__main">
        {/* Botón para volver al home */}
        <div className="projects-page__back container">
          <Link to="/" className="back-button">
            <span className="back-button__arrow">&larr;</span>
            <span className="back-button__text">Back to Home</span>
          </Link>
        </div>
        
        {/* Projects Section */}
        <ProjectsSection />
        
        {/* Espacio extra */}
        <div style={{ height: '4rem' }}></div>
      </main>

      {/* Modal de contacto */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default ProjectsPage;