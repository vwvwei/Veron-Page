// src/pages/ArtPage.jsx
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { artworks } from '../data/artworks';
import './ArtsPage.css';

export default function ArtPage() {
  const { slug } = useParams();

  // find artwork by slug
  const index = artworks.findIndex((a) => a.slug === slug);
  const art = index >= 0 ? artworks[index] : null;

  const prev = useMemo(() => (index > 0 ? artworks[index - 1] : null), [index]);
  const next = useMemo(
    () =>
      index >= 0 && index < artworks.length - 1 ? artworks[index + 1] : null,
    [index]
  );

  if (!art) {
    return (
      <div className="artpage container notfound">
        <h1>Artwork not found</h1>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="artpage container">
      {/* centered title */}
      <h1 className="art-title">{art.title}</h1>

      {/* gallery of all images */}
      <div className="art-gallery">
        {art.images.map((src, i) => (
          <figure key={i} className="art-frame">
            <img src={src} alt={`${art.title} ${i + 1}`} />
          </figure>
        ))}
      </div>

      {/* quoted & italic description */}
      {art.description && (
        <p className="art-desc">
          “<em>{art.description}</em>”
        </p>
      )}

      {/* prev / next navigation */}
      <div className="art-nav">
        <div className="left">
          {prev ? (
            <Link to={`/works/${prev.slug}`}>← {prev.title}</Link>
          ) : (
            <span />
          )}
        </div>
        <div className="right">
          {next ? (
            <Link to={`/works/${next.slug}`}>{next.title} →</Link>
          ) : (
            <span />
          )}
        </div>
      </div>

      <div className="back-home">
        <Link to="/">← Back to Home</Link>
      </div>
    </div>
  );
}
