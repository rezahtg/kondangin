# 🎯 Quick Reference - Environment Variables

## 📋 Variables List

Copy these to Vercel → Settings → Environment Variables:

```
REACT_APP_WHATSAPP_NUMBER=6287777653882

REACT_APP_BANK1_NAME=Bank BCA
REACT_APP_BANK1_ACCOUNT_NUMBER=1234567890
REACT_APP_BANK1_ACCOUNT_NAME=John Doe

REACT_APP_BANK2_NAME=Bank Mandiri
REACT_APP_BANK2_ACCOUNT_NUMBER=0987654321
REACT_APP_BANK2_ACCOUNT_NAME=Jane Doe
```

## ⚡ How to Change in Vercel

1. Go to your project in Vercel
2. Settings → Environment Variables
3. Edit the value you want to change
4. Deployments → Redeploy latest
5. Done! (2 minutes)

## 💻 Local Development

1. Update `.env` file in your project root
2. Restart dev server: `npm start`
3. Test your changes

## ⚠️ Remember

- ✅ All variables must start with `REACT_APP_`
- ✅ Changes require redeploy (but NO code changes!)
- ✅ WhatsApp number format: `6287777653882` (no + or spaces)
- ✅ Account numbers: numbers only, no spaces

## 📚 Full Guide

See [`ENV_VARIABLES_GUIDE.md`](./ENV_VARIABLES_GUIDE.md) for detailed instructions.
