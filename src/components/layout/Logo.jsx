import { Link } from 'react-router-dom';
import './Logo.scss';

const Logo = () => {
  return (
    <Link to="/" className="logo" aria-label="Creative Agency Home">
      <div className="logo__container">
        <div className="logo__circle">
          <span className="logo__text">ñ</span>
        </div>
        <span className="logo__name">Creative</span>
      </div>
    </Link>
  );
};

export default Logo;