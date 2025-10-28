# Vercel Deployment Guide

## Quick Deploy

### Option 1: Deploy via Vercel CLI

```bash
# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Option 2: Deploy via GitHub (Recommended)

1. Go to https://vercel.com
2. Click "Add New" → "Project"
3. Import your GitHub repository: `cherry-12345/Abhi-Jewels`
4. Configure:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Click "Deploy"

## Environment Variables (Optional)

If needed, add these in Vercel dashboard:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

## Post-Deployment

Your site will be live at:
- Production: `https://abhi-jewels.vercel.app`
- Custom domain: Configure in Vercel dashboard

## Status

- ✅ Build: Passing
- ✅ TypeScript: No errors
- ✅ Ready for deployment
