import './styles/NavBar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function NavBar() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <div className={`navbar ${isActive ? 'active' : ''}`}>
      <h1 style={{ color: 'white' }}>My Portfolio</h1>
      
      <div className="nav-links">
        <Link to="/" onClick={closeMenu}>About Me</Link>
        <Link to="/skills" onClick={closeMenu}>Skills</Link>
        <Link to="/projects" onClick={closeMenu}>Projects</Link>
        <Link to="/achieve" onClick={closeMenu}>Achievements</Link>
        <Link to="/contact" onClick={closeMenu}>Contact Me</Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default NavBar;
