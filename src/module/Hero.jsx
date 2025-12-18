import React from 'react';
import { Container } from 'react-bootstrap';

function Hero() {
  return (
    <div className="hero d-flex flex-column justify-content-center align-items-center" id="hero">
      <p className="font-playfair text-white paragraph-headline justify-content-center">
        The Wedding of
      </p>
      <h1 className="font-dancing text-white main-headline text-center">
        Ferry Siagian <br /><span className="color-cream d-flex flex-column justify-content-center align-items-center">&</span> Janet Manurung
      </h1>
    </div>
  );
}

export default Hero;
