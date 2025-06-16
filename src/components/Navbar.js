import React, { useState } from 'react';
import '../App.css';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  

  const getNavLinkClass = ({ isActive }) => {
    return isActive ? "nav-item-link active-link" : "nav-item-link";
  };
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
         
          <NavLink to="/" className="logo-link" onClick={() => setIsMenuOpen(false)}><span>BuzzBoard</span></NavLink>
        </div>
        
        <div className="hamburger" onClick={toggleMenu}>
          <span className={isMenuOpen ? 'bar active' : 'bar'}></span>
          <span className={isMenuOpen ? 'bar active' : 'bar'}></span>
          <span className={isMenuOpen ? 'bar active' : 'bar'}></span>
        </div>
        
        <ul className={isMenuOpen ? 'nav-links active' : 'nav-links'}>
          <li className="nav-item" onClick={() => setIsMenuOpen(false)}>
            <NavLink to="/" className={getNavLinkClass} end>HOME</NavLink>
          </li>
          <li className="nav-item" onClick={() => setIsMenuOpen(false)}>
            <NavLink to="/entertainment" className={getNavLinkClass}>ENTERTAINMENT</NavLink>
          </li>
          <li className="nav-item" onClick={() => setIsMenuOpen(false)}>
            <NavLink to="/sports" className={getNavLinkClass}>SPORTS</NavLink>
          </li>
          <li className="nav-item" onClick={() => setIsMenuOpen(false)}>
            <NavLink to="/technology" className={getNavLinkClass}>TECHNOLOGY</NavLink>
          </li>
          <li className="nav-item" onClick={() => setIsMenuOpen(false)}>
            <NavLink to="/politics" className={getNavLinkClass}>POLITICS</NavLink>
          </li>
          <li className="nav-item" onClick={() => setIsMenuOpen(false)}>
            <NavLink to="/world" className={getNavLinkClass}>WORLD</NavLink>
          </li>
          <li className="nav-item" onClick={() => setIsMenuOpen(false)}>
            <NavLink to="/other" className={getNavLinkClass}>OTHER</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
