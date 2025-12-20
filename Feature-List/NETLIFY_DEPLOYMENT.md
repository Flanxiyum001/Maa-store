# Netlify Deployment Guide

## Project Structure

Your project is configured as a **full-stack application**:
- **Frontend:** React + Vite (built to `dist/public`)
- **Backend:** Express.js API (bundled to `dist/index.cjs`)
- **Database:** PostgreSQL on Replit (external)

---

## Step 1: Prepare Your GitHub Repository

```bash
cd Feature-List
git add .
git commit -m "Ready for Netlify deployment"
git push
```

---

## Step 2: Set Up Netlify

### Option A: Automatic (Recommended)
1. Go to [Netlify](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** and select your repository
4. Netlify auto-detects `netlify.toml` configuration
5. Continue to environment variables

### Option B: Manual
1. Deploy via CLI: `npm install -g netlify-cli`
2. Run: `netlify deploy`

---

## Step 3: Set Environment Variables

In **Netlify Dashboard** → **Site settings** → **Environment variables**, add:

### Required (Database & Backend)
```
DATABASE_URL=postgresql://user:password@host:5432/database
SESSION_SECRET=generate-a-random-secure-string-here
NODE_ENV=production
```

### Google OAuth (After configuring)
```
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_CALLBACK_URL=https://your-site.netlify.app/api/auth/google/callback
```

### Optional (Firebase SMS - if using)
```
FIREBASE_ADMIN_JSON={"type":"service_account",...}
```

### Other
```
ADMIN_EMAILS=admin@example.com,other@example.com
```

---

## Step 4: Configure Google OAuth

1. **Get your Netlify domain:**
   - After first deployment, check Netlify dashboard
   - Format: `https://your-site.netlify.app`

2. **Update Google Cloud Console:**
   - Go to [APIs & Services → Credentials](https://console.cloud.google.com/)
   - Click your OAuth 2.0 Client ID
   - Under **Authorized JavaScript origins**, add:
     ```
     https://your-site.netlify.app
     ```
   - Under **Authorized redirect URIs**, add:
     ```
     https://your-site.netlify.app/api/auth/google/callback
     ```
   - **Save**

3. **Update Netlify environment variable:**
   ```
   GOOGLE_CALLBACK_URL=https://your-site.netlify.app/api/auth/google/callback
   ```

---

## Step 5: Deploy

1. **First deployment** (automatic with GitHub):
   - Push to GitHub branch
   - Netlify auto-builds and deploys

2. **Subsequent deployments**:
   - Push to GitHub
   - Netlify auto-rebuilds

3. **Manual deployment**:
   ```bash
   netlify deploy --prod
   ```

---

## Troubleshooting

### "Port 5000 not found" or "Cannot connect to backend"
- ❌ Backend process crashed
- ✅ Check **Functions** logs in Netlify dashboard
- ✅ Verify `DATABASE_URL` is correct
- ✅ Verify `SESSION_SECRET` is set

### "Redirect URI mismatch" (Google OAuth 403)
- ❌ JavaScript origin not added to Google Console
- ✅ Add `https://your-site.netlify.app` to Authorized JavaScript origins
- ✅ Wait 5 minutes for changes to propagate

### "Cannot POST /api/orders" (404)
- ❌ Frontend sending requests to wrong URL
- ✅ Check that API calls use correct base path
- ✅ Backend should respond to `/api/*` routes

### Database connection timeout
- ❌ PostgreSQL credentials wrong or database unreachable
- ✅ Verify `DATABASE_URL` format
- ✅ Check database is running (Replit dashboard)
- ✅ Verify firewall allows Netlify IP

---

## Build Configuration

**netlify.toml:**
```toml
[build]
command = "npm run build"
publish = "dist/public"

[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```

**Build process:**
1. Runs `npm run build` (builds both frontend and backend)
2. Publishes `dist/public` (frontend files)
3. Server (`dist/index.cjs`) runs as the backend

---

## API Routes

After deployment, your API is available at:
```
https://your-site.netlify.app/api/*
```

### Key Endpoints:
- `POST /api/register` - Register with username/password
- `POST /api/email/send-otp` - Send OTP to email
- `POST /api/email/verify-otp` - Verify email + login
- `POST /api/phone/send-otp` - Send OTP to phone
- `POST /api/phone/verify-otp` - Verify phone + login
- `GET /api/auth/google` - Google OAuth login
- `GET /api/products` - List products
- `POST /api/orders` - Place order (requires auth + verification)

---

## Testing Locally Before Deploying

```bash
# Build everything
npm run build

# Start production server
npm start

# Visit http://localhost:5000
```

---

## Environment Variables Reference

| Variable | Purpose | Example |
|----------|---------|---------|
| `DATABASE_URL` | PostgreSQL connection | `postgresql://user:pass@host:5432/db` |
| `SESSION_SECRET` | Session encryption | `random-secret-123` |
| `GOOGLE_CLIENT_ID` | OAuth client ID | `123456.apps.googleusercontent.com` |
| `GOOGLE_CLIENT_SECRET` | OAuth secret | `GOCSPX-...` |
| `GOOGLE_CALLBACK_URL` | OAuth callback | `https://your-site.netlify.app/api/auth/google/callback` |
| `NODE_ENV` | Environment | `production` |
| `ADMIN_EMAILS` | Admin whitelist | `admin@example.com` |

---

## What's Deployed Where

| Component | Location | Provider |
|-----------|----------|----------|
| Frontend (React/Vite) | `dist/public` | Netlify (CDN) |
| Backend (Express) | `dist/index.cjs` | Netlify (Server) |
| Database (PostgreSQL) | External | Replit (your DB) |
| Sessions | Memory + PostgreSQL | Netlify server |

---

## Custom Domain

To use a custom domain:
1. In Netlify → **Site settings** → **Domain management**
2. Click **Add domain**
3. Follow Netlify's DNS setup instructions
4. Update Google OAuth with your custom domain instead of `*.netlify.app`

---

## Performance & Security

✅ **Production optimizations:**
- Minified frontend assets
- Bundled backend code
- Session-based authentication (secure cookies)
- HTTPS enabled automatically

⚠️ **Recommended:**
- Set `SESSION_SECRET` to a strong random value
- Keep `GOOGLE_CLIENT_SECRET` private (Netlify env vars are secure)
- Monitor Netlify function logs for errors

---

## Need Help?

1. Check Netlify **Functions** logs
2. Check Netlify **Analytics**
3. Verify all environment variables are set
4. Test locally with `npm start`
