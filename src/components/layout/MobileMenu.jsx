import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import './MobileMenu.scss';

const MobileMenu = ({ isOpen, onClose, onScheduleCall }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const menuItems = [
    { label: 'About', href: '/#about' },
    { label: 'Service', href: '/#service' },
    { label: 'Projects', href: '/projects' },
  ];

  return (
    <>
      {/* Overlay (siempre se muestra cuando isOpen es true) */}
      {isOpen && (
        <div 
          className="mobile-menu__overlay" 
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      
      {/* Hamburger Icon */}
      <button
        className={`mobile-hamburger ${isOpen ? 'mobile-hamburger--open' : ''}`}
        onClick={() => onClose()} // Cambia el estado
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <span className="mobile-hamburger__line"></span>
        <span className="mobile-hamburger__line"></span>
        <span className="mobile-hamburger__line"></span>
      </button>
      
      {/* Menú desplegable */}
      <nav 
        className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`}
        aria-label="Main navigation"
      >
        <div className="mobile-menu__content">
          <ul className="mobile-menu__list">
            {menuItems.map((item) => (
              <li key={item.label} className="mobile-menu__item">
                <Link 
                  to={item.href} 
                  className="mobile-menu__link"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mobile-menu__cta">
            <Button 
              variant="primary" 
              onClick={() => {
                onClose();
                onScheduleCall?.();
              }}
            >
              Schedule a call
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileMenu;