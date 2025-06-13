import React from 'react';
import '../App.css';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {  
  const styles = {    
    navbar: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px',
      backgroundColor: '#1a1a1a',
      color: 'white',
      height: '60px',
      boxShadow: '0 3px 10px rgba(0,0,0,0.3)',
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000,
    },
    logo: {
      fontWeight: 'bold',
      fontSize: '1.5rem',
      cursor: 'pointer',
      letterSpacing: '1px',
    },    
    navLinks: {
      display: 'flex',
      listStyle: 'none',
      margin: '0 0 0 20px',
      padding: 0,
    },    
    navItem: {
      margin: '0 16px',
      cursor: 'pointer',
      position: 'relative',
    },    
    navItemLink: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '0.95rem',
      fontWeight: '500',
      letterSpacing: '0.8px',
      padding: '8px 0',
    }
  };  
  return (
    <nav style={styles.navbar} className="navbar">
      <div style={styles.logo} className="logo">
        <Link to="/" style={{color:"white",textDecoration:"none"}}><span>BuzzBoard</span></Link>
      </div>
      <ul style={styles.navLinks} className="nav-links">
        <li style={styles.navItem} className="nav-item">
          <Link to="/" style={styles.navItemLink} className="nav-item-link">HOME</Link>
        </li>        <li style={styles.navItem} className="nav-item">
          <Link to="/entertainment" style={styles.navItemLink} className="nav-item-link">ENTERTAINMENT</Link>
        </li>
        <li style={styles.navItem} className="nav-item">
          <Link to="/sports" style={styles.navItemLink} className="nav-item-link">SPORTS</Link>
        </li>
        <li style={styles.navItem} className="nav-item">
          <Link to="/technology" style={styles.navItemLink} className="nav-item-link">TECHNOLOGY</Link>
        </li>
        <li style={styles.navItem} className="nav-item">
          <Link to="/politics" style={styles.navItemLink} className="nav-item-link">POLITICS</Link>
        </li>
        <li style={styles.navItem} className="nav-item">
          <Link to="/world" style={styles.navItemLink} className="nav-item-link">WORLD</Link>
        </li>
        <li style={styles.navItem} className="nav-item">
          <Link to="/other" style={styles.navItemLink} className="nav-item-link">OTHER</Link>
        </li>
      </ul>
    </nav>
  );
}
