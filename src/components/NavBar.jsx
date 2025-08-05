import React from 'react';
import { NavLink } from 'react-router-dom';
//import './NavBar.css'; // if you extract styles

export default function NavBar() {
  const linkStyle = ({ isActive }) => ({
    marginLeft: '1rem',
    color: isActive ? 'var(--accent)' : 'var(--fg)',
    textDecoration: 'none',
    fontFamily: 'var(--font-mono)',
  });

  return (
    <nav className="terminal-nav">
      <div className="logo">FindVirtual.ME</div>
      <div className="links">
        <NavLink to="/"         style={linkStyle}>Home</NavLink>
        <NavLink to="/experience" style={linkStyle}>Experience</NavLink>
        <NavLink to="/projects"   style={linkStyle}>Projects</NavLink>
        <NavLink to="/contact"    style={linkStyle}>Contact</NavLink>
      </div>
    </nav>
  );
}