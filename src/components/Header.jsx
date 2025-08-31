import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="site-header" role="banner">
      {/* Put your logo at public/logo.png (or change the src) */}
      <a href="/" className="brand" aria-label="Home">
        <img src="/Logo.png" alt="Site logo" />
      </a>
    </header>
  );
}
