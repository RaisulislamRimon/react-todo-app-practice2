import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className="Navigation">
      <button className="Navigation-toggle" onClick={toggleMenu}>
        Menu
      </button>
      <ul className={`Navigation-menu ${isExpanded ? 'is-expanded' : ''}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={toggleMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </li>
        <li>
          <a href="https://example.com">External Link</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
