// src/data/artworks.js
// Put images under /public/images/… (Vite will serve them statically)

export const artworks = [
  {
    id: 'spectrum',
    slug: 'spectrum',
    title: 'We Are All in This Spectrum',
    main: '/images/We Are All in This Spectrum-main.jpeg', // for home page
    images: [
      '/images/We Are All in This Spectrum-main.jpeg',
      '/images/We Are All in This Spectrum-2.jpeg',
    ],
    description:
      'A swirling convergence of colour and emotion, We Are All in This Spectrum captures the invisible threads that connect us. Vortex-like clouds of colours blend and collide—each hue reaching, yearning to belong. Embedded within the textured surface lies a quiet message, felt more than seen, inviting viewers to explore beyond the visible. This piece is a raw emotional release, a tactile abstraction on inclusion, perception, and the unseen forces that shape our shared experience.',
  },

  {
    id: 'golden-city',
    slug: 'golden-city',
    title: 'Golden City',
    main: '/images/Golden City-main.jpeg',
    images: ['/images/Golden City-main.jpeg', '/images/Golden City-2.jpeg'],
    description:
      'Bathed in radiant hues of gold and orange, Golden City evokes a celestial realm—a tribute to divine presence and the artist’s spiritual beginning. As one of the first piece in the collection, it holds deep personal significance, placing faith at the heart of creation. The central form suggests imperfect eyes, textured and raised, inviting touch as a way of seeing. Beneath the surface lies a quiet devotion, felt through braille and soulfully expressed in every brushstroke. A tactile abstraction born of emotion, reverence, and light.',
  },

  {
    id: 'true-image',
    slug: 'true-image',
    title: 'True Image',
    main: '/images/True Image-main.jpeg',
    images: [
      '/images/True Image-main.jpeg',
      '/images/True Image-2.jpeg',
      '/images/True Image-3.jpeg',
      '/images/True Image-4.jpeg',
    ],
    description:
      'A meditative composition of layered circles in deep green and blue hues, True Image invites viewers into a quiet dialogue of tactile and tone. Beneath its abstract surface lies a personal code—an intimate self-portrait rendered through touch rather than sight. This piece marks the beginning of the artist’s journey to make visual art accessible to all, including those who experience the world through their fingertips.',
  },
];
