import React, { useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';

function CountdownTimer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const countDownDate = new Date('DEC 27, 2025 08:00:00').getTime();
  // eslint-disable-next-line no-unused-vars
  const countdown = setInterval(function () {
    const now = new Date().getTime();
    const timeleft = countDownDate - now;

    setDays(Math.floor(timeleft / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((timeleft % (1000 * 60)) / 1000));
  }, 1000);

  return (
    <Container
      className="text-center font-playfair bgcolor-cream p-4 mb-5"
      fluid
    >
      <Container>
        <h2 className="my-3 fw-bold">WAKTU MENUJU ACARA</h2>
        <Row className="justify-content-center py-3">
          <Col xs="3" md={{ span: 2, offset: 1 }} className="counter-box">
            <h3>{days}</h3>
            <span className="fw-bold timer-desc">Hari</span>
          </Col>
          <Col xs="3" md={{ span: 2, offset: 1 }} className="counter-box">
            <h3>{hours}</h3>
            <span className="fw-bold timer-desc">Jam</span>
          </Col>
          <Col xs="3" md={{ span: 2, offset: 1 }} className="counter-box">
            <h3>{minutes}</h3>
            <span className="fw-bold timer-desc">Menit</span>
          </Col>
          <Col xs="3" md={{ span: 2, offset: 1 }} className="counter-box">
            <h3>{seconds}</h3>
            <span className="fw-bold timer-desc">Detik</span>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default CountdownTimer;
