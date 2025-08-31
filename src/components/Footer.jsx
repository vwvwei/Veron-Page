import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      {/* small gradient accent only */}
      <div className="footer-accent" />

      {/* text container that matches your page width & side padding */}
      <div className="footer-inner">
        <small>© 2025 VwV. All rights reserved.</small>
      </div>
    </footer>
  );
}
