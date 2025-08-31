// src/pages/Home.jsx
import React, { useEffect, useRef } from 'react';
import './Home.css';
import { artworks } from '../data/artworks';

export default function Home() {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const ROW = 2; // must match Home.css grid-auto-rows
    const GAP = 16; // must match Home.css gap

    const measure = (item) => {
      const box = item.querySelector('.overlay-wrapper');
      if (!box) return;
      const h = box.getBoundingClientRect().height;
      const rows = Math.ceil((h + GAP) / (ROW + GAP));
      item.style.setProperty('--rows', rows);
    };

    const items = Array.from(grid.children);

    // measure after image loads
    items.forEach((item) => {
      const img = item.querySelector('img');
      if (img && !img.complete) {
        img.addEventListener('load', () => measure(item), { once: true });
        img.addEventListener('error', () => measure(item), { once: true });
      } else {
        measure(item);
      }
    });

    const ro = new ResizeObserver(() => items.forEach(measure));
    ro.observe(grid);

    const onResize = () => items.forEach(measure);
    window.addEventListener('resize', onResize);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="home">
      <div className="masonry" ref={gridRef}>
        {artworks.map((art) => (
          <a key={art.id} href={`/works/${art.slug}`} className="masonry-item">
            <div className="overlay-wrapper">
              <img src={art.main} alt={art.title} loading="lazy" />
              <div className="overlay">
                <span>{art.title}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
