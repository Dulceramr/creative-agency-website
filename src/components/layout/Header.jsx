import React, { useState } from 'react';
import MobileMenu from './MobileMenu';
import Logo from './Logo';
import Button from '../ui/Button';
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header__container container">
          {/* Logo */}
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="header__nav-desktop" aria-label="Desktop navigation">
            <ul className="header__nav-list">
              <li><a href="#about" className="header__nav-link">About</a></li>
              <li><a href="#service" className="header__nav-link">Service</a></li>
              <li><a href="#projects" className="header__nav-link">Projects</a></li>
            </ul>
            <Button variant="primary" className="header__cta">
              Schedule a call
            </Button>
          </nav>
          
          {/* Mobile Menu */}
          <MobileMenu 
            isOpen={isMenuOpen} 
            onClose={handleMenuToggle}
          />
        </div>
      </header>
    </>
  );
};

export default Header;