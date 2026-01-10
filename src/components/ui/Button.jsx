import React from 'react';
import './Button.scss';

const Button = ({ 
  variant = 'primary',     // 'primary' | 'secondary' | 'underline'
  size = 'md',            // 'sm' | 'md' | 'lg'
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  fullWidth = false
}) => {
  // Construir clases CSS dinámicamente
  const buttonClasses = [
    'btn',
    `btn--${variant}`,
    size !== 'md' ? `btn--${size}` : '',
    fullWidth ? 'btn--full' : '',
    className
  ].filter(Boolean).join(' ').trim();

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;