import React, { useState } from 'react';
import { Container, Button, Row, Col, Card, Modal, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
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
      toast.success(`Nomor rekening ${bankName} telah disalin!`);
    }).catch(() => {
      toast.error('Gagal menyalin nomor rekening');
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
      toast.error('Mohon masukkan nama Anda');
      return;
    }

    const message = `Turut berbahagia ya, aku ada transfer ke rekening:\n${selectedAccount.bankName}\nNo. Rekening: ${selectedAccount.accountNumber}\n\nBerikut bukti transfernya.`;
    sendWhatsAppMessage(DEFAULT_WHATSAPP_NUMBER, userName, message);

    handleModalClose();
    toast.success('Membuka WhatsApp...');
  };

  return (
    <Container fluid className="py-5">
      <div className="d-flex flex-column align-items-center p-4">
        <h3 className="font-playfair text-center fw-bold mb-3">Amplop Digital</h3>
        <p className="font-playfair text-center mb-5" style={{ maxWidth: '600px' }}>
          Doa dan kehadiran Anda adalah hadiah terindah bagi kami. Namun jika memberi adalah ungkapan kasih Anda, kami dengan senang hati menerimanya melalui:
        </p>

        <Row className="g-4 w-100" style={{ maxWidth: '800px' }}>
          {bankAccounts.map((account) => (
            <Col xs={12} md={6} key={account.id}>
              <Card className="h-100 shadow-sm border-0" style={{ borderRadius: '15px' }}>
                <Card.Body className="d-flex flex-column align-items-center p-4">
                  {/* Bank Icon/Logo */}
                  <div
                    className="mb-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      fontSize: '24px',
                      fontWeight: 'bold'
                    }}
                  >
                    {account.bankName.split(' ')[1].charAt(0)}
                  </div>

                  {/* Bank Name */}
                  <h5 className="font-playfair fw-bold mb-3">{account.bankName}</h5>

                  {/* Account Number */}
                  <div className="w-100 mb-3">
                    <p className="text-muted mb-1" style={{ fontSize: '0.85rem' }}>Nomor Rekening</p>
                    <div
                      className="p-3 text-left"
                      style={{
                        backgroundColor: '#f8f9fa',
                        borderRadius: '10px',
                        fontSize: '1.0rem',
                        fontWeight: 'bold',
                        letterSpacing: '2px',
                        fontFamily: 'monospace'
                      }}
                    >
                      {account.accountNumber}
                    </div>
                  </div>

                  {/* Account Name */}
                  <div className="w-100 mb-3">
                    <p className="text-muted mb-1" style={{ fontSize: '0.85rem' }}>Atas Nama</p>
                    <p className="fw-bold mb-0" style={{ fontSize: '1.1rem' }}>{account.accountName}</p>
                  </div>

                  {/* Buttons */}
                  <div className="d-flex gap-2 w-100 mt-auto">
                    <Button
                      variant="outline-primary"
                      className="flex-fill"
                      onClick={() => copyToClipboard(account.accountNumber, account.bankName)}
                      style={{ borderRadius: '10px' }}
                    >Salin No. Rekening
                    </Button>
                    <Button
                      variant="success"
                      className="flex-fill"
                      onClick={() => handleSendProofClick(account.bankName, account.accountNumber)}
                      style={{ borderRadius: '10px' }}
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

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
    </Container>
  );
}

export default Payment;
