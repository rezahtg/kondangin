# 🚀 Deploy to Vercel - Production Ready Guide

## 📋 Prerequisites Checklist

Before deploying, make sure you have:
- ✅ GitHub account
- ✅ Vercel account (free at [vercel.com](https://vercel.com))
- ✅ Your code pushed to GitHub
- ✅ Backend API is accessible (currently using Heroku)

## 🎯 Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Push to GitHub

First, make sure your code is on GitHub:

```bash
# If not already a git repository
git init

# Add all files
git add .

# Commit your changes
git commit -m "Ready for production deployment"

# Create a new repository on GitHub first, then:
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New"** → **"Project"**
3. Import your GitHub repository
4. Configure your project:
   - **Framework Preset:** Create React App (auto-detected)
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `npm run build` (auto-filled)
   - **Output Directory:** `build` (auto-filled)

### Step 3: Environment Variables (If Needed)

If you have any environment variables, add them in the Vercel dashboard:
- Click on **"Environment Variables"**
- Add your variables (e.g., API URLs, keys)
- Click **"Deploy"**

### Step 4: Deploy 🎉

Click **"Deploy"** and wait for Vercel to build and deploy your site!

---

## 🎯 Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

```bash
# For production deployment
vercel --prod
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No (first time) or Yes (re-deployment)
- **Project name?** → Enter your project name
- **Directory?** → `./` (press Enter)
- **Override settings?** → No (press Enter)

---

## 📝 Optional: Create vercel.json Configuration

Create a `vercel.json` file in your root directory for custom configuration:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "devCommand": "npm start",
  "installCommand": "npm install",
  "framework": "create-react-app",
  "regions": ["sin1"]
}
```

**Note:** `sin1` is Singapore region (good for Indonesia). Other options:
- `hnd1` - Tokyo, Japan
- `syd1` - Sydney, Australia

---

## 🔧 Pre-Deployment Checklist

### 1. Update Backend URL (If Moving from Heroku)

If your backend API needs updating, edit `src/config/APIService.js`:

```javascript
// Consider using environment variables
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://your-backend.herokuapp.com';
```

### 2. Test Production Build Locally

Before deploying, test your production build:

```bash
# Create production build
npm run build

# Serve it locally (install serve first)
npx serve -s build
```

Visit `http://localhost:3000` to test.

### 3. Check for Console Errors

Open browser DevTools (F12) and check:
- ❌ No console errors
- ❌ No 404 errors for assets
- ✅ All images load
- ✅ API calls work

### 4. Optimize Images (Optional but Recommended)

Large images can slow down your site. Consider:
- Compressing images with [TinyPNG](https://tinypng.com)
- Using WebP format for better compression
- Lazy loading images

---

## 🌐 Custom Domain (Optional)

### Add Your Own Domain

1. Go to your Vercel project dashboard
2. Click **"Settings"** → **"Domains"**
3. Add your domain (e.g., `wedding.yourdomain.com`)
4. Follow Vercel's DNS configuration instructions

---

## 🔍 Environment Variables Best Practices

### Create .env file for local development:

Create `.env` in your root directory:

```env
REACT_APP_API_URL=https://shalmakevin-wedding.herokuapp.com
REACT_APP_WHATSAPP_NUMBER=6287777653882
```

### Update your code to use env variables:

**In `src/config/APIService.js`:**
```javascript
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://shalmakevin-wedding.herokuapp.com';

const getUserComments = (page) => {
  return new Promise((resolve, reject) => {
    axios(`${API_BASE_URL}/comments/getComments`, {
      method: 'post',
      data: { page },
      timeout,
    }).then(/* ... */);
  });
};
```

**In `src/utils/whatsappTemplate.js`:**
```javascript
export const DEFAULT_WHATSAPP_NUMBER = process.env.REACT_APP_WHATSAPP_NUMBER || '6287777653882';
```

### Add to Vercel Dashboard:

1. Go to **Settings** → **Environment Variables**
2. Add each variable:
   - Name: `REACT_APP_API_URL`
   - Value: `https://shalmakevin-wedding.herokuapp.com`
3. Select **Production**, **Preview**, and **Development**
4. Click **Save**

**Important:** Environment variables starting with `REACT_APP_` are automatically included in the build!

---

## 🚨 Common Issues & Solutions

### Issue 1: Build Fails

**Solution:** Check build logs in Vercel dashboard
- Look for missing dependencies
- Run `npm run build` locally first
- Make sure all imports are correct

### Issue 2: Blank Page After Deployment

**Solution:**
1. Check browser console for errors
2. Verify `homepage` field in `package.json` (should be `"/"` or removed)
3. Check if all assets are loading correctly

### Issue 3: API Not Working

**Solution:**
1. Check if backend is still running (Heroku free tier sleeps)
2. Verify CORS is enabled on backend
3. Check API URLs in code
4. Open browser DevTools Network tab to see API errors

### Issue 4: WhatsApp Links Not Working

**Solution:**
1. Test the generated URL in browser console
2. Ensure phone number format is correct (62xxx without +)
3. Check if number is registered on WhatsApp

---

## 📊 Performance Optimization

### 1. Enable Automatic Optimizations

Vercel automatically optimizes:
- ✅ Image compression
- ✅ Code splitting
- ✅ Minification
- ✅ CDN distribution

### 2. Add Service Worker (Optional)

For offline support, create-react-app includes service worker support:

In `src/index.js`, change:
```javascript
// Change this:
serviceWorker.unregister();

// To this:
serviceWorker.register();
```

### 3. Analyze Bundle Size

```bash
npm run build
npx source-map-explorer 'build/static/js/*.js'
```

---

## 🔄 Continuous Deployment

Once connected to GitHub, Vercel automatically:
- ✅ Deploys every push to `main` branch to production
- ✅ Creates preview deployments for pull requests
- ✅ Provides deployment URLs for testing

### Deploy Workflow:

```bash
# Make changes
git add .
git commit -m "Update features"
git push origin main

# Vercel automatically deploys!
```

---

## 📱 Testing Your Deployment

After deployment, test these features:

### ✅ Functionality Checklist:
- [ ] Homepage loads correctly
- [ ] All sections visible (Hero, About, Gallery, etc.)
- [ ] Countdown timer works
- [ ] Guestbook form submits successfully
- [ ] Payment section displays bank accounts
- [ ] Copy button works
- [ ] WhatsApp buttons open correctly
- [ ] Modal for name input appears
- [ ] Music plays (if autoplay is allowed)
- [ ] Images load properly
- [ ] Responsive on mobile

### ✅ Performance Checklist:
- [ ] Page loads in < 3 seconds
- [ ] Images are optimized
- [ ] No console errors
- [ ] API calls succeed

---

## 🎉 Post-Deployment

### Share Your Site!

Your site will be at:
```
https://your-project-name.vercel.app
```

Or if you added a custom domain:
```
https://your-custom-domain.com
```

### Monitor Performance

Vercel provides:
- 📊 Analytics (free tier limited)
- 🔍 Real-time logs
- ⚡ Performance metrics

Access from your project dashboard.

---

## 🆘 Need Help?

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Vercel Support:** [vercel.com/support](https://vercel.com/support)
- **Community:** [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

---

## 📌 Quick Reference

```bash
# Build locally
npm run build

# Test production build
npx serve -s build

# Deploy to Vercel
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs
```

---

## ✨ Your Site is Production Ready! 🎊

Your wedding website is now live and accessible worldwide via Vercel's global CDN!

**Features Working:**
- ✅ Guestbook with WhatsApp integration
- ✅ Digital envelope (bank accounts)
- ✅ Payment proof via WhatsApp with name input
- ✅ Responsive design
- ✅ Optimized performance
- ✅ Auto-deployments from GitHub

**Congratulations! 🎉**
