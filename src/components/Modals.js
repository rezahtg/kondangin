import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

function Modals() {
  const [show, setShow] = useState(true);
  const [guestName, setGuestName] = useState('');

  useEffect(() => {
    // Get guest parameter from URL
    const urlParams = new URLSearchParams(window.location.search);
    const guest = urlParams.get('to');
    if (guest) {
      setGuestName(guest);
    }
  }, []);

  return (
    <Modal show={show} fullscreen={true}>
      <Modal.Body className="d-flex text-center justify-content-center flex-column align-items-center modal-background">
        <div className="modal-box">
          <h3 className="font-playfair mb-4">THE WEDDING</h3>
          <h1 className="font-dancing mb-4" style={{ fontSize: '4em' }}>
            Fery <br />
            &amp;
            <br /> Janet
          </h1>
          <h3 className="font-playfair mb-5">27 Desember 2025</h3>
          {guestName && (
            <h4 className="font-playfair mb-4 guest-invitation">
              Undangan Kepada: {guestName}
            </h4>
          )}
          <Button
            variant="secondary"
            onClick={() => setShow(false)} W
            className="font-playfair"
            style={{ letterSpacing: '1px' }}
          >
            Open Invitation
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Modals;
