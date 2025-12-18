# Payment Section - Bank Account Setup

## 📝 How to Update Bank Account Details

Edit the `bankAccounts` array in `src/module/Payment.jsx` (around line 7):

```javascript
const bankAccounts = [
  {
    id: 1,
    bankName: 'Bank BCA',           // ← Change your bank name here
    accountNumber: '1234567890',    // ← Change your account number here
    accountName: 'Kevin Shalma',    // ← Change account holder name here
  },
  {
    id: 2,
    bankName: 'Bank Mandiri',       // ← Change your bank name here
    accountNumber: '0987654321',    // ← Change your account number here
    accountName: 'Kevin Shalma',    // ← Change account holder name here
  },
];
```

## ✨ Features

### 1. **Copy Account Number** (📋 Salin button)
- Copies the account number to clipboard
- Shows success notification

### 2. **Send Proof via WhatsApp** (📱 Kirim Bukti button)
- Opens WhatsApp with pre-filled message
- Message includes bank name and account number
- Recipient: Your WhatsApp number (configured in `whatsappTemplate.js`)

### WhatsApp Message Template:
```
Halo, Aku Tamu Undangan.

Saya telah melakukan transfer ke rekening:
[Bank Name]
No. Rekening: [Account Number]

Berikut bukti transfernya.
```

## 🎨 Customization Options

### Add More Banks
Simply add more objects to the array:
```javascript
const bankAccounts = [
  {
    id: 1,
    bankName: 'Bank BCA',
    accountNumber: '1234567890',
    accountName: 'Kevin Shalma',
  },
  {
    id: 2,
    bankName: 'Bank Mandiri',
    accountNumber: '0987654321',
    accountName: 'Kevin Shalma',
  },
  {
    id: 3,
    bankName: 'Bank BNI',
    accountNumber: '5555666677',
    accountName: 'Kevin Shalma',
  },
];
```

### Change Card Colors
Edit the gradient in the bank icon (around line 60):
```javascript
background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// Try other gradients:
// background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
// background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
```

### Change Button Text
```javascript
// Line ~100
📋 Salin          // ← Change to your text

// Line ~107
📱 Kirim Bukti    // ← Change to your text
```

### Customize WhatsApp Message
Edit the `sendProofViaWhatsApp` function (around line 29):
```javascript
const sendProofViaWhatsApp = (bankName, accountNumber) => {
  const name = 'Tamu Undangan';
  const message = `Your custom message here...\n${bankName}\n${accountNumber}`;
  sendWhatsAppMessage(DEFAULT_WHATSAPP_NUMBER, name, message);
};
```

## 📱 WhatsApp Number Configuration

The WhatsApp number is configured in:
```
src/utils/whatsappTemplate.js
```

Current number: `6287777653882`

## 🌐 Responsive Design

- **Mobile (xs)**: Cards stack vertically (1 column)
- **Desktop (md+)**: Cards side by side (2 columns)
- Automatically adjusts for any number of banks

## 🚀 Ready to Deploy

This component is ready to deploy to Vercel. No backend required - it's purely frontend!

## 💡 Tips

1. **Test the copy function** - Make sure clipboard API works in your browser
2. **Test WhatsApp** - Verify the message format looks good
3. **Update account numbers** - Use your real bank account numbers before going live
4. **Consider privacy** - These account numbers will be publicly visible
