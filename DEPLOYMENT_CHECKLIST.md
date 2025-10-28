# 🚀 Deployment Checklist

## ✅ Pre-Deployment Verification

### Code Quality
- [x] TypeScript compilation passes (`npm run type-check`)
- [x] ESLint validation passes (`npm run lint`)
- [x] Production build succeeds (`npm run build`)
- [x] All tests pass (if applicable)
- [x] No console errors in development mode

### Git & Version Control
- [x] All changes committed
- [x] Changes pushed to GitHub
- [x] Branch: `main`
- [x] Latest commit: `86d5d98`
- [x] Repository: https://github.com/cherry-12345/Abhi-Jewels

### Documentation
- [x] README.md updated
- [x] Bug fix summary created
- [x] Pull request guide created
- [x] Deployment checklist created

## 🔧 Environment Setup

### Required Environment Variables

Create a `.env.production` file with:

```env
# API Configuration
NEXT_PUBLIC_API_URL=https://your-api-domain.com
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Security Keys (Generate new ones for production!)
ENCRYPTION_KEY=your-32-character-encryption-key-here
JWT_SECRET=your-jwt-secret-key-here

# Database (if using Prisma)
DATABASE_URL=your-database-connection-string

# Payment Gateway (Razorpay)
RAZORPAY_KEY_ID=your-razorpay-key-id
RAZORPAY_KEY_SECRET=your-razorpay-secret

# Email Service (Nodemailer)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# Redis (if using)
REDIS_URL=redis://your-redis-url

# AWS (if using S3 for images)
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
AWS_REGION=us-east-1
AWS_S3_BUCKET=your-bucket-name

# Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Generate Secure Keys

```bash
# Generate encryption key (32 characters)
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Generate JWT secret
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

#### Via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

#### Via GitHub Integration
1. Go to https://vercel.com
2. Click "Import Project"
3. Select your GitHub repository
4. Configure environment variables
5. Click "Deploy"

**Vercel Configuration:**
- Framework Preset: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`
- Node Version: 18.x

### Option 2: Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login to Netlify
netlify login

# Initialize site
netlify init

# Deploy to production
netlify deploy --prod
```

**Netlify Configuration (netlify.toml):**
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Option 3: AWS Amplify

1. Go to AWS Amplify Console
2. Connect your GitHub repository
3. Configure build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

### Option 4: Docker

```bash
# Build Docker image
docker build -t abhi-jewels:latest .

# Run container
docker run -p 3000:3000 --env-file .env.production abhi-jewels:latest

# Or use Docker Compose
docker-compose up -d
```

**docker-compose.yml:**
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    env_file:
      - .env.production
    restart: unless-stopped
```

### Option 5: Traditional VPS (DigitalOcean, Linode, etc.)

```bash
# SSH into your server
ssh user@your-server-ip

# Clone repository
git clone https://github.com/cherry-12345/Abhi-Jewels.git
cd Abhi-Jewels

# Install dependencies
npm install

# Build project
npm run build

# Install PM2 for process management
npm install -g pm2

# Start application
pm2 start npm --name "abhi-jewels" -- start

# Save PM2 configuration
pm2 save
pm2 startup
```

## 🔒 Security Checklist

### Before Going Live
- [ ] Change all default secrets and keys
- [ ] Enable HTTPS/SSL certificate
- [ ] Configure CORS properly
- [ ] Set up rate limiting
- [ ] Enable security headers
- [ ] Configure CSP (Content Security Policy)
- [ ] Set up monitoring and logging
- [ ] Configure backup strategy
- [ ] Test payment gateway in production mode
- [ ] Verify email sending works

### Security Headers (next.config.js)
```javascript
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block'
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin'
        }
      ]
    }
  ]
}
```

## 📊 Post-Deployment Verification

### Functional Testing
- [ ] Homepage loads correctly
- [ ] Product pages display properly
- [ ] Shopping cart works
- [ ] Checkout process functions
- [ ] Admin panel accessible
- [ ] Contact form sends emails
- [ ] Search functionality works
- [ ] Mobile responsiveness verified

### Performance Testing
- [ ] Lighthouse score > 90
- [ ] Page load time < 3 seconds
- [ ] Images optimized and loading
- [ ] No console errors
- [ ] API endpoints responding

### SEO Verification
- [ ] Meta tags present
- [ ] Sitemap accessible
- [ ] Robots.txt configured
- [ ] Structured data valid
- [ ] Open Graph tags working

### Monitoring Setup
- [ ] Google Analytics configured
- [ ] Error tracking (Sentry/LogRocket)
- [ ] Uptime monitoring
- [ ] Performance monitoring
- [ ] Server logs accessible

## 🔄 Continuous Deployment

### GitHub Actions (Already configured)

The project includes CI/CD workflow at `.github/workflows/ci.yml`

**Automatic Deployment Triggers:**
- Push to `main` branch
- Pull request merge
- Manual workflow dispatch

**CI/CD Pipeline:**
1. Install dependencies
2. Run type checking
3. Run linting
4. Build project
5. Run tests (if configured)
6. Deploy to production

## 📱 Domain Configuration

### Custom Domain Setup

#### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Configure DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

#### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5

   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

## 🆘 Rollback Plan

### Quick Rollback
```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or rollback to specific commit
git reset --hard commit-hash
git push origin main --force
```

### Vercel Rollback
1. Go to Deployments
2. Find previous working deployment
3. Click "..." → "Promote to Production"

### Docker Rollback
```bash
# Use previous image
docker pull abhi-jewels:previous-tag
docker stop current-container
docker run -d abhi-jewels:previous-tag
```

## 📞 Support & Monitoring

### Monitoring Tools
- **Uptime:** UptimeRobot, Pingdom
- **Performance:** New Relic, Datadog
- **Errors:** Sentry, Rollbar
- **Analytics:** Google Analytics, Mixpanel

### Emergency Contacts
- **Developer:** [Your contact]
- **DevOps:** [DevOps contact]
- **Business Owner:** +91 7947106192

## ✅ Final Checklist

- [x] All code committed and pushed
- [x] Build passes successfully
- [x] Environment variables documented
- [ ] Production environment variables set
- [ ] Domain configured (if applicable)
- [ ] SSL certificate installed
- [ ] Monitoring tools configured
- [ ] Backup strategy in place
- [ ] Team notified of deployment
- [ ] Documentation updated

## 🎉 Deployment Complete!

Once deployed, your site will be live at:
- **Production URL:** https://your-domain.com
- **Admin Panel:** https://your-domain.com/admin
- **API Endpoint:** https://your-domain.com/api

### Post-Launch Tasks
1. Monitor error logs for 24 hours
2. Check analytics setup
3. Test all critical user flows
4. Verify payment processing
5. Send launch announcement
6. Update social media links
7. Submit sitemap to search engines

---

**Status:** ✅ Ready for Production Deployment
**Last Updated:** 2024
**Version:** 1.0.0
