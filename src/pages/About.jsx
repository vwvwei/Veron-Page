// src/pages/About.jsx
import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about">
      {/* Accent line */}
      <div className="about-accent" />

      {/* Portrait */}
      <img className="about-portrait" src="About-pic3.jpg" alt="Veron Wei" />

      <div className="about-text">
        <h2 className="about-subtitle">
          Conceptual Artist&nbsp;|&nbsp;Tactile Abstraction&nbsp;|&nbsp;Art
          Beyond Sight
        </h2>

        <p>
          Born in <strong>Hong Kong</strong> and raised between the Philippines
          and Hong Kong.
        </p>

        <p>
          She didn’t follow a traditional path into the arts — Veron slowly
          found herself drawn back to her childhood passion. What began as a
          quiet reconnection blossomed into a deep love for creating — not just
          as personal expression, but as a way to offer something soulful and
          meaningful to others.
        </p>

        <p>
          Her work centers on <em>vibrant tactile abstract art</em> — pieces
          that invite touch and challenge the dominance of sight as the primary
          lens through which we interpret the world.
        </p>

        <p>
          In a city overflowing with visual art, she’s carving a path toward
          inclusivity: creating art that speaks to the blind, the visually
          impaired, and to anyone seeking connection beyond the surface.
        </p>

        <p className="about-quote">
          “Art should not be limited to the eyes — it should be inclusive
          through our imagination.”
        </p>

        {/* Contact */}
        <div className="about-contact">
          <p>
            Email /// <a href="mailto:vwvwei@gmail.com">vwvwei@gmail.com</a>
          </p>
        </div>

        {/* Links */}
        <div className="about-links">
          <p>
            Instagram ///{' '}
            <a
              href="https://www.instagram.com/vibrant.within.vortex/"
              target="_blank"
              rel="noreferrer"
            >
              vibrant.within.vortex
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
