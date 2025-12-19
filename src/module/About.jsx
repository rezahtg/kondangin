import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaInstagram } from 'react-icons/fa';
import { cewe, cowo } from '../assets';

function About() {
  return (
    <Container className="position-relative about-container mb-5" fluid>
      <h2 className="text-center mb-4 font-playfair">Undangan Pernikahan</h2>
      <p className="text-center mb-5">
        <span className="font-playfair">
          “Aku senantiasa mengucap syukur kepada Allahku karena kamu,<br></br>
          atas kasih karunia Allah yang dianugerahkan-Nya kepada kamu dalam Kristus Yesus”
        </span>
        <br />
        <span className="font-dancing fs-4"> 1 Korintus 1:4 </span>
      </p>
      <Row className="justify-content-md-evenly">
        <Col md="4">
          <img src={cewe} alt="shalma" className="photo-about" />
          <div className="mt-2 text-center">
            <h3 className="font-dancing about-name">Janet Eliana Manurung S.pd</h3>
            <p className="font-playfair about-description">
              Anak Ke-2 dari Bp. J Manurung <br /> & Ibu. K Sitorus
            </p>
            <a
              href={process.env.REACT_APP_INSTAGRAM_JANET || 'https://www.instagram.com/janet_eliana_manurung'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-link text-dark text-decoration-none mt-2"
              style={{ fontSize: '0.85rem', padding: '0.25rem 0.5rem' }}
            >
              <FaInstagram className="me-1" />
              Instagram
            </a>
          </div>
        </Col>
        <Col md="4">
          <img src={cowo} alt="cowo" className="photo-about" />
          <div className="mt-2 text-center">
            <h3 className="font-dancing about-name">Fery Okto Mario Siagian</h3>
            <p className="font-playfair about-description">
              Anak Ke-4 dari Bp. B Siagian <br /> & Ibu. R Simanjuntak
            </p>
            <a
              href={process.env.REACT_APP_INSTAGRAM_FERY || 'https://www.instagram.com/ferysiagian567'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-link text-dark text-decoration-none mt-2"
              style={{ fontSize: '0.85rem', padding: '0.25rem 0.5rem' }}
            >
              <FaInstagram className="me-1" />
              Instagram
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
