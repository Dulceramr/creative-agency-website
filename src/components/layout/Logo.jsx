import { Link } from 'react-router-dom';
import './Logo.scss';

const Logo = () => {
  return (
    <Link to="/" className="logo" aria-label="Creative Agency Home">
      <div className="logo__container">
        <div className="logo__image-container">
          <img 
            src="/images/logo/logo.jpeg" 
            alt="Creative Agency Logo"
            className="logo__image"
            loading="eager" 
          />
        </div>
        <span className="logo__name">creative</span>
      </div>
    </Link>
  );
};

export default Logo;