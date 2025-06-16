import React, { useState } from 'react';
import '../App.css';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <NavLink
            to="/"
            end
            className="logo-link"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>BuzzBoard</span>
          </NavLink>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={isMenuOpen ? 'bar active' : 'bar'}></span>
          <span className={isMenuOpen ? 'bar active' : 'bar'}></span>
          <span className={isMenuOpen ? 'bar active' : 'bar'}></span>
        </div>

        <ul className={isMenuOpen ? 'nav-links active' : 'nav-links'}>
          <li className="nav-item" onClick={() => setIsMenuOpen(false)}>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-item-link active-link" : "nav-item-link"
              }
            >
              HOME
            </NavLink>
          </li>

          <li className="nav-item" onClick={() => setIsMenuOpen(false)}>
            <NavLink
              to="/entertainment"
              className={({ isActive }) =>
                isActive ? "nav-item-link active-link" : "nav-item-link"
              }
            >
              ENTERTAINMENT
            </NavLink>
          </li>

          <li className="nav-item" onClick={() => setIsMenuOpen(false)}>
            <NavLink
              to="/sports"
              className={({ isActive }) =>
                isActive ? "nav-item-link active-link" : "nav-item-link"
              }
            >
              SPORTS
            </NavLink>
          </li>

          <li className="nav-item" onClick={() => setIsMenuOpen(false)}>
            <NavLink
              to="/technology"
              className={({ isActive }) =>
                isActive ? "nav-item-link active-link" : "nav-item-link"
              }
            >
              TECHNOLOGY
            </NavLink>
          </li>

          <li className="nav-item" onClick={() => setIsMenuOpen(false)}>
            <NavLink
              to="/politics"
              className={({ isActive }) =>
                isActive ? "nav-item-link active-link" : "nav-item-link"
              }
            >
              POLITICS
            </NavLink>
          </li>

          <li className="nav-item" onClick={() => setIsMenuOpen(false)}>
            <NavLink
              to="/world"
              className={({ isActive }) =>
                isActive ? "nav-item-link active-link" : "nav-item-link"
              }
            >
              WORLD
            </NavLink>
          </li>

          <li className="nav-item" onClick={() => setIsMenuOpen(false)}>
            <NavLink
              to="/other"
              className={({ isActive }) =>
                isActive ? "nav-item-link active-link" : "nav-item-link"
              }
            >
              OTHER
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
