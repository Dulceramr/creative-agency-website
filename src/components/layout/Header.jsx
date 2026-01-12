import { Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from './Logo';
import Button from '../ui/Button';
import MobileMenu from './MobileMenu';
import './Header.scss';

const Header = ({ onScheduleCall }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <Logo />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="header__nav-desktop" aria-label="Desktop navigation">
            <ul className="header__nav-list">
              <li><Link to="/#about" className="header__nav-link">About</Link></li>
              <li><Link to="/#service" className="header__nav-link">Service</Link></li>
              <li><Link to="/projects" className="header__nav-link">Projects</Link></li>
            </ul>
            <Button 
              variant="secondary" 
              className="header__cta"
              onClick={onScheduleCall}
            >
              Schedule a call
            </Button>
          </nav>
          
          {/* Hamburger Icon */}
          <div className="header__hamburger">
            <button
              className={`mobile-hamburger ${isMenuOpen ? 'mobile-hamburger--open' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <span className="mobile-hamburger__line"></span>
              <span className="mobile-hamburger__line"></span>
              <span className="mobile-hamburger__line"></span>
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)}
        onScheduleCall={onScheduleCall}
      />
    </>
  );
};

export default Header;