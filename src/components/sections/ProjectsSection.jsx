import React, { useState } from 'react';
import ProjectCard from '../ui/ProjectCard';
import FilterBar from '../ui/FilterBar';
import './ProjectsSection.scss';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Datos de proyectos 
  const projects = [
    {
      id: 1,
      title: 'Brand Identity Redesign',
      category: 'branding',
      description: 'Complete brand overhaul for tech startup',
      image: 'branding-1',
      tags: ['Logo', 'Guidelines', 'Branding']
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      category: 'web',
      description: 'Full-stack e-commerce solution',
      image: 'web-1',
      tags: ['Web Design', 'Development', 'E-commerce']
    },
    {
      id: 3,
      title: 'Mobile App UI/UX',
      category: 'uiux',
      description: 'User interface for fitness application',
      image: 'uiux-1',
      tags: ['UI Design', 'UX Research', 'Prototyping']
    },
    {
      id: 4,
      title: 'Packaging Design',
      category: 'branding',
      description: 'Sustainable packaging for organic products',
      image: 'branding-2',
      tags: ['Packaging', 'Print', 'Sustainability']
    },
    {
      id: 5,
      title: 'Corporate Website',
      category: 'web',
      description: 'Responsive website for financial services',
      image: 'web-2',
      tags: ['Web Design', 'CMS', 'Responsive']
    },
    {
      id: 6,
      title: 'Dashboard Design',
      category: 'uiux',
      description: 'Analytics dashboard for SaaS platform',
      image: 'uiux-2',
      tags: ['Dashboard', 'Data Visualization', 'SaaS']
    }
  ];

  // Filtrado
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'branding', label: 'Branding' },
    { id: 'web', label: 'Web Design' },
    { id: 'uiux', label: 'UI/UX' }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-section__container container">
        
        {/* Header de la sección */}
        <div className="projects-section__header">
          <h2 className="projects-section__title">
            Our Creative Projects
          </h2>
          <p className="projects-section__subtitle">
            Explore our portfolio of successful design and development projects
          </p>
        </div>
        
        {/* Barra de filtros */}
        <FilterBar 
          categories={categories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        
        {/* Grid de proyectos */}
        <div className="projects-section__grid">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
        
        {/* Empty state si no hay proyectos */}
        {filteredProjects.length === 0 && (
          <div className="projects-section__empty">
            <p>No projects found in this category.</p>
          </div>
        )}
        
      </div>
    </section>
  );
};

export default ProjectsSection;