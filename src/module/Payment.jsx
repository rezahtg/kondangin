import React, { useState } from 'react';
import { Container, Button, Row, Col, Card, Modal, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { sendWhatsAppMessage, DEFAULT_WHATSAPP_NUMBER } from '../utils/whatsappTemplate';

function Payment() {
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState('');
  const [selectedAccount, setSelectedAccount] = useState(null);

  // Bank accounts from environment variables with fallback values
  const bankAccounts = [
    {
      id: 1,
      bankName: process.env.REACT_APP_BANK1_NAME || 'Bank BCA',
      accountNumber: process.env.REACT_APP_BANK1_ACCOUNT_NUMBER || '1234567890',
      accountName: process.env.REACT_APP_BANK1_ACCOUNT_NAME || 'John Doe',
    },
    {
      id: 2,
      bankName: process.env.REACT_APP_BANK2_NAME || 'Bank Mandiri',
      accountNumber: process.env.REACT_APP_BANK2_ACCOUNT_NUMBER || '0987654321',
      accountName: process.env.REACT_APP_BANK2_ACCOUNT_NAME || 'Jane Doe',
    },
  ];

  const copyToClipboard = (text, bankName) => {
    navigator.clipboard.writeText(text).then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Berhasil!',
        text: `Nomor rekening ${bankName} telah disalin!`,
        timer: 1500,
        showConfirmButton: false,
        position: 'top-end',
        toast: true,
        timerProgressBar: true
      });
    }).catch(() => {
      Swal.fire({
        icon: 'error',
        title: 'Gagal!',
        text: 'Gagal menyalin nomor rekening',
        timer: 2000,
        showConfirmButton: false,
        position: 'top-end',
        toast: true
      });
    });
  };

  const handleSendProofClick = (bankName, accountNumber) => {
    setSelectedAccount({ bankName, accountNumber });
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setUserName('');
    setSelectedAccount(null);
  };

  const handleSubmitProof = (e) => {
    e.preventDefault();
    if (!userName.trim()) {
      Swal.fire({
        icon: 'warning',
        title: 'Perhatian!',
        text: 'Mohon masukkan nama Anda',
        confirmButtonText: 'OK',
        confirmButtonColor: '#198754'
      });
      return;
    }

    const message = `Turut berbahagia ya, aku ada transfer ke rekening:\n${selectedAccount.bankName}\nNo. Rekening: ${selectedAccount.accountNumber}\n\nBerikut bukti transfernya.`;
    sendWhatsAppMessage(DEFAULT_WHATSAPP_NUMBER, userName, message);

    handleModalClose();
    Swal.fire({
      icon: 'success',
      title: 'Berhasil!',
      text: 'Membuka WhatsApp...',
      timer: 1500,
      showConfirmButton: false,
      position: 'top-end',
      toast: true,
      timerProgressBar: true
    });
  };

  return (
    <Container fluid className="py-5">
      <div className="d-flex flex-column align-items-center p-4">
        <h3 className="font-playfair text-center fw-bold mb-3">Amplop Digital</h3>
        <p className="font-playfair text-center mb-5 payment-container-max-width">
          Doa dan kehadiran Anda adalah hadiah terindah bagi kami. Namun jika memberi adalah ungkapan kasih Anda, kami dengan senang hati menerimanya melalui:
        </p>

        <Row className="g-4 w-100 payment-cards-max-width">
          {bankAccounts.map((account) => (
            <Col xs={12} md={6} key={account.id}>
              <Card className="h-100 shadow-sm border-0 payment-card">
                <Card.Body className="d-flex flex-column align-items-center p-4">
                  {/* Bank Icon/Logo */}
                  <div className="mb-3 d-flex align-items-center justify-content-center payment-bank-icon">
                    {account.bankName.split(' ')[1].charAt(0)}
                  </div>

                  {/* Bank Name */}
                  <h5 className="font-playfair fw-bold mb-3">{account.bankName}</h5>

                  {/* Account Number */}
                  <div className="w-100 mb-3">
                    <p className="text-muted mb-1 payment-label">Nomor Rekening</p>
                    <div className="payment-account-number text-left">
                      {account.accountNumber}
                    </div>
                  </div>

                  {/* Account Name */}
                  <div className="w-100 mb-3">
                    <p className="text-muted mb-1 payment-label">Atas Nama</p>
                    <p className="fw-bold mb-0 payment-account-name">{account.accountName}</p>
                  </div>

                  {/* Buttons */}
                  <div className="payment-btn-container">
                    <Button
                      variant="outline-primary"
                      className="flex-fill payment-btn"
                      onClick={() => copyToClipboard(account.accountNumber, account.bankName)}
                    >Salin No. Rekening
                    </Button>
                    <Button
                      variant="success"
                      className="flex-fill payment-btn"
                      onClick={() => handleSendProofClick(account.bankName, account.accountNumber)}
                    >Kirim Bukti
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Modal for Name Input */}
      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="font-playfair">Kirim Bukti Transfer</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmitProof}>
          <Modal.Body>
            <p className="mb-3">Masukkan nama Anda sebelum mengirim bukti transfer via WhatsApp:</p>
            <Form.Group className="mb-3">
              <Form.Label>Nama Anda</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan nama Anda"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                autoFocus
                required
              />
            </Form.Group>
            {selectedAccount && (
              <div className="p-3 bg-light rounded">
                <small className="text-muted d-block mb-1">Transfer ke:</small>
                <strong>{selectedAccount.bankName}</strong>
                <br />
                <small>No. Rekening: {selectedAccount.accountNumber}</small>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Batal
            </Button>
            <Button variant="success" type="submit">
              Kirim via WhatsApp
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
}

export default Payment;
