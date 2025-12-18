import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ceremony, reception } from '../assets';
import { BsFillCalendarEventFill, BsFillMapFill } from 'react-icons/bs';

function Place() {
  const eventDate = 'Sabtu, 27 Desember 2025';
  const eventPlace = 'Gereja HKBP Pematang Bandar';
  const mapsUrl =
    'https://www.google.com/maps/place/HKBP+RESORT+PEMATANG+BANDAR/@3.1186478,99.2393104,17z/data=!4m14!1m7!3m6!1s0x3033d435dbf2ea13:0x1451eeb219d4f480!2sHKBP+RESORT+PEMATANG+BANDAR!8m2!3d3.1186478!4d99.2393104!16s%2Fg%2F11c45mh9p8!3m5!1s0x3033d435dbf2ea13:0x1451eeb219d4f480!8m2!3d3.1186478!4d99.2393104!16s%2Fg%2F11c45mh9p8?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D';
  const mapsUrl2 =
    'https://www.google.com/maps/place/Jl.+Perdagangan+Pematang+Bandar+No.18,+Kandangan,+Kec.+Pematang+Bandar,+Kabupaten+Simalungun,+Sumatera+Utara+21184/@3.1237439,99.2458423,17z/data=!3m1!4b1!4m6!3m5!1s0x3033d43bae009129:0xddc8d21d4458d37e!8m2!3d3.1237439!4d99.2484226!16s%2Fg%2F11f66j3whc?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D';
  const calendarUrl =
    'https://calendar.google.com/event?action=TEMPLATE&tmeid=NmwzdnFtZG83czZkYTVjZG1tam1ubGgxZ2YgbXVoYW1tYWRrZXZpbnBmQG0&tmsrc=muhammadkevinpf%40gmail.com';
  return (
    <Container className="font-playfair px-4">
      <h2 className="text-center">
        <span>Acara Pemberkatan</span>
      </h2>
      <h2 className="text-center font-dancing">{eventDate}</h2>
      <Row className="justify-content-center my-5">
        <Col md={{ span: 5, offset: 1 }} className="pb-4 place-container">
          <img src={ceremony} alt="ceremony" className="w-100 h-100 rounded" />
        </Col>
        <Col md={{ span: 5, offset: 1 }}>
          <h3 className="fw-bold">Ibadah Pemberkatan</h3>
          <p>{eventDate}</p>
          <p>09.00 WIB - 11.00 WIB</p>
          <p>{eventPlace}</p>
          <p>Jl. Gereja, Kec. Pematang Bandar, Kabupaten Simalungun, Sumatera Utara 21186</p>
          <Button variant="warning" className=" bgcolor-cream">
            <a href={mapsUrl} target="_blank" rel="noreferrer noopener">
              <BsFillMapFill className="align-middle me-2" />
              <span className="align-middle fw-bold">View on Map</span>
            </a>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col
          sm={{ order: 1 }}
          md={{ span: 5, offset: 1, order: 2 }}
          className="pb-4 place-container"
        >
          <img
            src={reception}
            alt="reception"
            className="w-100 h-100 rounded"
          />
        </Col>
        <Col sm={{ order: 2 }} md={{ span: 5, offset: 1, order: 1 }}>
          <h3 className="fw-bold">Acara Adat</h3>
          <p>{eventDate}</p>
          <p>11.00 WIB - Selesai</p>
          <p>{eventPlace}</p>
          <p>Jl. SIsingamangaraja, Kec. Pematang Bandar, Kabupaten Simalungun, Sumatera Utara 21186</p>
          <Button
            variant="warning"
            className="bgcolor-cream my-2 d-flex align-items-center"
          >
            <a
              href={calendarUrl}
              target="_blank"
              rel="noreferrer noopener nofollow"
            >
              <BsFillCalendarEventFill className="me-2" />
              <span className="align-middle fw-bold">
                Add to Google Calendar
              </span>
            </a>
          </Button>
          <div className="d-flex">
            <Button variant="warning" className="bgcolor-cream">
              <a
                href={mapsUrl2}
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                <BsFillMapFill className="align-middle me-2" />
                <span className="align-middle fw-bold">View on Map</span>
              </a>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Place;
