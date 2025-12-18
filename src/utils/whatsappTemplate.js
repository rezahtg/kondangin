/**
 * WhatsApp Template Utility
 * Generates WhatsApp message links with customizable parameters
 */

/**
 * Creates a WhatsApp message link
 * @param {string} phoneNumber - Phone number in format without + (e.g., "628229851896")
 * @param {string} name - Name of the sender
 * @param {string} message - Message content
 * @returns {string} WhatsApp link
 */
export const createWhatsAppLink = (phoneNumber, name, message) => {
    // Remove any non-numeric characters from phone number
    const cleanPhone = phoneNumber.replace(/\D/g, '');

    // Create the message template
    const messageTemplate = `Halo, Aku ${name}.\n\n${message}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(messageTemplate);

    // Create WhatsApp link (wa.me format)
    const link = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;

    // Debug logging
    console.log('WhatsApp Link Details:');
    console.log('- Phone Number:', cleanPhone);
    console.log('- Full URL:', link);

    return link;
};

/**
 * Opens WhatsApp in a new window
 * @param {string} phoneNumber - Phone number
 * @param {string} name - Name of the sender
 * @param {string} message - Message content
 */
export const sendWhatsAppMessage = (phoneNumber, name, message) => {
    const link = createWhatsAppLink(phoneNumber, name, message);
    window.open(link, '_blank');
};

/**
 * Default phone number for the application
 * Configured via environment variable REACT_APP_WHATSAPP_NUMBER
 * Note: Make sure this number is registered on WhatsApp
 * Format: Country code (62) + phone number without leading 0
 * Example: 08777653882 becomes 6287777653882
 */
export const DEFAULT_WHATSAPP_NUMBER = process.env.REACT_APP_WHATSAPP_NUMBER || '6287777653882';

