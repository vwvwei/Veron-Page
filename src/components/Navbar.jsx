import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((s) => !s);
  const close = () => setIsOpen(false);

  return (
    <>
      <aside className="rail">
        <button
          className={`fab ${isOpen ? 'open' : ''}`}
          onClick={toggle}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? '✕' : '☰'}
        </button>
        <span className="rail-label">{isOpen ? 'Close' : 'Menu'}</span>
      </aside>

      {/* Render backdrop only when open */}
      {isOpen && <div className="backdrop" onClick={close} />}

      <aside className={`drawer ${isOpen ? 'open' : ''}`}>
        <nav className="drawer-nav">
          <Link to="/" onClick={close}>
            Home
          </Link>
          <Link to="/contact" onClick={close}>
            Contact
          </Link>
          <Link to="/about" onClick={close}>
            About
          </Link>
        </nav>
      </aside>
    </>
  );
}
