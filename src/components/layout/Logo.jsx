import React from 'react';
import './Logo.scss';

const Logo = () => {
  return (
    <a href="/" className="logo" aria-label="Creative Agency Home">
      <svg 
        className="logo__svg" 
        width="40" 
        height="40" 
        viewBox="0 0 40 40" 
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Círculo rojo */}
        <circle cx="20" cy="20" r="20" fill="#f94f4f"/>
        
        {/* Letra "ñ" blanca */}
        <path 
          d="M12 25V15H14V23H18V25H12ZM20 25V15H22V25H20ZM26 25V15H28V23H32V25H26Z" 
          fill="white"
        />
        <circle cx="20" cy="18" r="1" fill="white"/>
      </svg>
      
      <span className="logo__name">Creative</span>
    </a>
  );
};

export default Logo;