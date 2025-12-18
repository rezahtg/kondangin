import React, { useState } from 'react';
import { sendWhatsAppMessage, createWhatsAppLink, DEFAULT_WHATSAPP_NUMBER } from '../utils/whatsappTemplate';

/**
 * WhatsApp Template Example Component
 * This demonstrates how to use the WhatsApp template utility
 */
function WhatsAppTemplateExample() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    // Method 1: Send message directly
    const handleSendMessage = () => {
        sendWhatsAppMessage(DEFAULT_WHATSAPP_NUMBER, name, message);
    };

    // Method 2: Get the link (for use in <a> tags or manual handling)
    const handleGetLink = () => {
        const link = createWhatsAppLink(DEFAULT_WHATSAPP_NUMBER, name, message);
        console.log('WhatsApp Link:', link);
        return link;
    };

    return (
        <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
            <h2>WhatsApp Message Template</h2>
            <p>Send a message to: {DEFAULT_WHATSAPP_NUMBER}</p>

            <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>
                    Name:
                </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    style={{ width: '100%', padding: '8px' }}
                />
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>
                    Message:
                </label>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message"
                    rows={4}
                    style={{ width: '100%', padding: '8px' }}
                />
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
                <button
                    onClick={handleSendMessage}
                    disabled={!name || !message}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#25D366',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        flex: 1
                    }}
                >
                    📱 Send via WhatsApp
                </button>

                <button
                    onClick={handleGetLink}
                    disabled={!name || !message}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#0088cc',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        flex: 1
                    }}
                >
                    Get Link
                </button>
            </div>

            <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
                <h3>Usage Examples:</h3>

                <h4>1. Using the sendWhatsAppMessage function:</h4>
                <pre style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '3px', overflow: 'auto' }}>
                    {`import { sendWhatsAppMessage, DEFAULT_WHATSAPP_NUMBER } 
  from './utils/whatsappTemplate';

sendWhatsAppMessage(
  DEFAULT_WHATSAPP_NUMBER, 
  'John Doe', 
  'Hello, this is my message!'
);`}
                </pre>

                <h4>2. Using createWhatsAppLink for custom links:</h4>
                <pre style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '3px', overflow: 'auto' }}>
                    {`import { createWhatsAppLink } 
  from './utils/whatsappTemplate';

const link = createWhatsAppLink(
  '628229851896', 
  'Jane Doe', 
  'Custom message here'
);

// Use in an anchor tag
<a href={link} target="_blank">
  Send WhatsApp Message
</a>`}
                </pre>

                <h4>3. Custom phone number:</h4>
                <pre style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '3px', overflow: 'auto' }}>
                    {`import { sendWhatsAppMessage } 
  from './utils/whatsappTemplate';

// Send to different number
sendWhatsAppMessage(
  '6281234567890',
  'Alice',
  'Message to different number'
);`}
                </pre>
            </div>
        </div>
    );
}

export default WhatsAppTemplateExample;
