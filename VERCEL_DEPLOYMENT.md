# 🚀 Vercel Deployment Guide

## Current Status: NOT DEPLOYED ⚠️

Your project is ready but not yet deployed to Vercel.

---

## Quick Deploy (3 Steps)

### Step 1: Login to Vercel
```bash
vercel login
```

### Step 2: Deploy
```bash
vercel --prod
```

### Step 3: Done! ✅
Your site will be live at: `https://your-project.vercel.app`

---

## Alternative: Deploy via Dashboard

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select: `cherry-12345/Abhi-Jewels`
4. Click "Deploy"
5. Done! ✅

---

## Auto-Deploy Setup

Once connected, every push to `main` branch will auto-deploy.

**GitHub → Vercel** (Automatic) ✅

---

## Environment Variables

Add these in Vercel Dashboard → Settings → Environment Variables:

```env
NEXT_PUBLIC_BASE_URL=https://your-domain.com
JWT_SECRET=your-secret-key
ENCRYPTION_KEY=your-32-char-key
ADMIN_PASSWORD=your-hashed-admin-password-salt$hash
```

---

## Check Deployment Status

```bash
vercel ls
```

---

## Need Help?

Run: `vercel --help`
Docs: https://vercel.com/docs
