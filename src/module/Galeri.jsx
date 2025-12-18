import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-image-lightbox';
import { Container } from 'react-bootstrap';
import { photos } from '../config/photos';

function Galeri() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setIsOpen(false);
  };
  return (
    <Container fluid>
      <Gallery photos={photos} onClick={openLightbox} margin={4} className="cursor-pointer"/>
      {isOpen && (
        <Lightbox
          mainSrc={photos[currentImage].src}
          nextSrc={photos[(currentImage + 1) % photos.length].src}
          prevSrc={
            photos[(currentImage + photos.length - 1) % photos.length].src
          }
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setCurrentImage((currentImage + photos.length - 1) % photos.length)
          }
          onMoveNextRequest={() =>
            setCurrentImage((currentImage + 1) % photos.length)
          }
        />
      )}
    </Container>
  );
}

export default Galeri;
