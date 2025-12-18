# 🔧 Environment Variables Configuration Guide

## 📋 What Can You Change Without Re-deploying?

You can now update these values directly in Vercel dashboard and they'll take effect on the next deployment (no code changes needed):

### ✅ Configurable Values:

1. **WhatsApp Number** - For receiving payment proofs and guestbook messages
2. **Bank Account 1** - Name, account number, account holder name
3. **Bank Account 2** - Name, account number, account holder name

---

## 🚀 How to Update in Vercel (Without Re-deploying Code)

### Step 1: Go to Vercel Dashboard

1. Open [vercel.com](https://vercel.com)
2. Select your project
3. Click **"Settings"** tab
4. Click **"Environment Variables"** in the left sidebar

### Step 2: Add/Update Variables

Add these environment variables:

#### WhatsApp Configuration:
```
Name: REACT_APP_WHATSAPP_NUMBER
Value: 6287777653882
Environments: ✅ Production ✅ Preview ✅ Development
```

#### Bank Account 1:
```
Name: REACT_APP_BANK1_NAME
Value: Bank BCA
Environments: ✅ Production ✅ Preview ✅ Development

Name: REACT_APP_BANK1_ACCOUNT_NUMBER
Value: 1234567890
Environments: ✅ Production ✅ Preview ✅ Development

Name: REACT_APP_BANK1_ACCOUNT_NAME
Value: John Doe
Environments: ✅ Production ✅ Preview ✅ Development
```

#### Bank Account 2:
```
Name: REACT_APP_BANK2_NAME
Value: Bank Mandiri
Environments: ✅ Production ✅ Preview ✅ Development

Name: REACT_APP_BANK2_ACCOUNT_NUMBER
Value: 0987654321
Environments: ✅ Production ✅ Preview ✅ Development

Name: REACT_APP_BANK2_ACCOUNT_NAME
Value: Jane Doe
Environments: ✅ Production ✅ Preview ✅ Development
```

### Step 3: Redeploy (Quick!)

After adding/updating variables:
1. Go to **"Deployments"** tab
2. Click the **"..." menu** on the latest deployment
3. Click **"Redeploy"**
4. Wait ~2 minutes for the new deployment

**OR** just push any commit to trigger automatic redeployment.

---

## 💻 Local Development Setup

### Create `.env` file:

Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Then edit `.env` with your values:

```env
# WhatsApp Number (without + sign)
REACT_APP_WHATSAPP_NUMBER=6287777653882

# Bank Account 1
REACT_APP_BANK1_NAME=Bank BCA
REACT_APP_BANK1_ACCOUNT_NUMBER=1234567890
REACT_APP_BANK1_ACCOUNT_NAME=John Doe

# Bank Account 2
REACT_APP_BANK2_NAME=Bank Mandiri
REACT_APP_BANK2_ACCOUNT_NUMBER=0987654321
REACT_APP_BANK2_ACCOUNT_NAME=Jane Doe
```

### Restart Dev Server:

After creating/updating `.env`:
```bash
# Stop server (Ctrl+C)
# Start again
npm start
```

**Important:** Changes to `.env` require a server restart!

---

## 🎯 Quick Change Scenarios

### Change WhatsApp Number:

**In Vercel:**
1. Settings → Environment Variables
2. Find `REACT_APP_WHATSAPP_NUMBER`
3. Click **Edit**
4. Change to: `6281234567890`
5. Save
6. Redeploy

**Result:** All WhatsApp buttons now use the new number!

### Change Bank Account:

**In Vercel:**
1. Settings → Environment Variables
2. Find `REACT_APP_BANK1_ACCOUNT_NUMBER`
3. Click **Edit**
4. Change to your real account number
5. Save
6. Redeploy

**Result:** Payment section shows your new account number!

### Add Different Bank:

**In Vercel:**
1. Change `REACT_APP_BANK2_NAME` to: `Bank BNI`
2. Change `REACT_APP_BANK2_ACCOUNT_NUMBER` to: `5555666677`
3. Change `REACT_APP_BANK2_ACCOUNT_NAME` to: `Your Name`
4. Redeploy

**Result:** Second bank card shows BNI instead of Mandiri!

---

## 📝 Environment Variable Format

### WhatsApp Number Format:
```
❌ Wrong: +62 877 7653 882
❌ Wrong: 0877 7653 882
✅ Correct: 6287777653882
```

### Bank Name Format:
```
✅ Bank BCA
✅ Bank Mandiri
✅ Bank BNI
✅ Bank BRI
✅ Any bank name works
```

### Account Number Format:
```
✅ Numbers only
✅ No spaces
✅ No dashes
Example: 1234567890
```

### Account Holder Name:
```
✅ Your full name
✅ As registered in the bank
Example: John Doe
Example: Reza Hutagaol
```

---

## ⚠️ Important Notes

### 1. Variables Must Start with `REACT_APP_`

Create React App **only** includes environment variables that start with `REACT_APP_`:
- ✅ `REACT_APP_WHATSAPP_NUMBER` - Works!
- ❌ `WHATSAPP_NUMBER` - Won't work!

### 2. Environment Variables are Public

Environment variables in React are **compiled into the bundle** and are **publicly visible**. This is fine for:
- ✅ WhatsApp numbers
- ✅ Bank account numbers
- ✅ Public configuration

**Don't use for:**
- ❌ API secrets
- ❌ Private keys
- ❌ Passwords

### 3. Require Rebuild

Changing environment variables requires a rebuild because they're compiled into the JavaScript bundle. But this is still faster than changing code!

### 4. .env Files Are Not Deployed

Your `.env` file stays local and is in `.gitignore`. When deploying to Vercel:
- Local: Uses `.env` file
- Vercel: Uses dashboard environment variables

---

## 🔍 Verify Configuration

### Check if Environment Variables are Loaded:

Add this temporarily to `Payment.jsx` (for testing):
```javascript
console.log('WhatsApp Number:', process.env.REACT_APP_WHATSAPP_NUMBER);
console.log('Bank 1 Name:', process.env.REACT_APP_BANK1_NAME);
```

Open browser console (F12) to see the values.

### Local Testing:
```bash
npm start
# Open browser and check console
```

### Production Testing:
- Deploy to Vercel
- Open your site
- Press F12 → Console tab
- Check the logged values

---

## 🎯 Common Use Cases

### Case 1: Testing Different Numbers

**Scenario:** Want to test with your personal WhatsApp before going live?

**Solution:**
1. In Vercel, set `REACT_APP_WHATSAPP_NUMBER` to your personal number
2. Redeploy
3. Test the functionality
4. Change back to the real number
5. Redeploy

### Case 2: Multiple Bank Accounts

**Scenario:** Want to add a third bank account?

**Current Limitation:** Code currently supports 2 accounts.

**To Add More:** You'll need to modify `Payment.jsx` to add a third object to the array. (Let me know if you want me to make it support dynamic number of accounts!)

### Case 3: Temporary Changes

**Scenario:** Need to temporarily change account number?

**Solution:**
1. Update in Vercel dashboard
2. Redeploy (takes 2 minutes)
3. Change back when done
4. Redeploy again

---

## 🚨 Troubleshooting

### Variables Not Working?

1. **Check spelling** - Must match exactly (case-sensitive)
2. **Check environment** - Make sure applied to Production
3. **Redeploy** - Changes require a new deployment
4. **Clear cache** - Hard refresh browser (Ctrl+Shift+R)

### Still Showing Default Values?

1. **Check fallback** - Code has fallback values if env vars not set
2. **Check Vercel logs** - Look for errors in deployment logs
3. **Verify variable names** - Must start with `REACT_APP_`

### Local Dev Not Working?

1. **Restart server** - Stop and start `npm start`
2. **Check .env file** - Make sure it exists in root directory
3. **Check .env format** - No quotes needed around values

---

## 📚 Reference

### All Available Variables:

| Variable Name | Purpose | Example |
|---------------|---------|---------|
| `REACT_APP_WHATSAPP_NUMBER` | WhatsApp contact number | `6287777653882` |
| `REACT_APP_BANK1_NAME` | First bank name | `Bank BCA` |
| `REACT_APP_BANK1_ACCOUNT_NUMBER` | First bank account number | `1234567890` |
| `REACT_APP_BANK1_ACCOUNT_NAME` | First bank account holder | `John Doe` |
| `REACT_APP_BANK2_NAME` | Second bank name | `Bank Mandiri` |
| `REACT_APP_BANK2_ACCOUNT_NUMBER` | Second bank account number | `0987654321` |
| `REACT_APP_BANK2_ACCOUNT_NAME` | Second bank account holder | `Jane Doe` |

---

## ✅ Checklist

Before deploying with environment variables:

- [ ] Created `.env` file locally
- [ ] Added all required variables
- [ ] Tested locally with `npm start`
- [ ] Committed code (NOT the `.env` file!)
- [ ] Added env vars in Vercel dashboard
- [ ] Deployed to Vercel
- [ ] Tested on production URL
- [ ] Verified WhatsApp number works
- [ ] Verified bank details display correctly

---

## 🎉 Benefits

Using environment variables gives you:

✅ **Easy Updates** - Change values without touching code  
✅ **No Redeployment** - Well, technically you redeploy but no code changes  
✅ **Different Environments** - Different values for dev/staging/production  
✅ **Security** - Keep sensitive values out of Git  
✅ **Flexibility** - Quick changes for testing  

---

**You can now update your WhatsApp number and bank details anytime in Vercel! 🎊**
