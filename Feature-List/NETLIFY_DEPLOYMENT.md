# Netlify Deployment Guide

## Prerequisites

- GitHub repository with your code
- Netlify account
- PostgreSQL database (Replit or external)

## Step 1: Configure Environment Variables

1. **Copy `.env.example` to reference values**
2. **In Netlify Dashboard:**
   - Site settings → Environment variables
   - Add these variables:

### Database & Auth
```
DATABASE_URL=postgresql://user:password@host:port/database
SESSION_SECRET=generate-random-secret-here
NODE_ENV=production
```

### Google OAuth (After adding JavaScript Origin and Redirect URI)
```
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
GOOGLE_CALLBACK_URL=https://your-site.netlify.app/api/auth/google/callback
```

### Optional: Firebase Admin (for SMS)
```
FIREBASE_ADMIN_JSON={"type":"service_account",...}
```

### Other
```
ADMIN_EMAILS=admin@example.com
VITE_API_BASE=https://your-site.netlify.app/.netlify/functions/api
```

## Step 2: Configure Google OAuth

1. **Get your Netlify domain:**
   - Deploy once, then get domain from Netlify dashboard
   - Format: `https://your-site.netlify.app`

2. **Update Google Cloud Console:**
   - Go to APIs & Services → Credentials
   - Click your OAuth 2.0 Client ID
   - **Authorized JavaScript origins:** Add `https://your-site.netlify.app`
   - **Authorized redirect URIs:** Add `https://your-site.netlify.app/api/auth/google/callback`
   - **Save**

## Step 3: Deploy

### Option A: Automatic (GitHub)
1. Push code to GitHub
2. Go to Netlify → "Add new site" → "Import an existing project"
3. Connect GitHub repo
4. Netlify auto-detects build settings from `netlify.toml`
5. Deploy!

### Option B: Manual (CLI)
```bash
npm run build
netlify deploy --prod --dir=dist
```

## Step 4: Test

1. Click "Sign up with Google" button
2. Verify email is auto-confirmed
3. Register with phone OTP
4. Verify phone number
5. Place order to confirm both verifications work

## Troubleshooting

### "Redirect URI mismatch" Error
- ❌ JavaScript origins not added to Google Console
- ✅ Solution: Add `https://your-site.netlify.app` to Authorized JavaScript origins

### API Calls 404
- ❌ `VITE_API_BASE` not set correctly
- ✅ Solution: Set `VITE_API_BASE=https://your-site.netlify.app/.netlify/functions/api`

### Database Connection Error
- ❌ `DATABASE_URL` not set or invalid
- ✅ Solution: Copy the correct PostgreSQL connection string from Replit

### Session/Cookie Issues
- ❌ `SESSION_SECRET` missing or different between deployments
- ✅ Solution: Set `SESSION_SECRET` as environment variable (same value in Netlify)

## Structure

- **Frontend:** Built to `dist/public`, served by Netlify
- **Backend:** Built to `dist/netlify/functions`, runs as serverless functions
- **Database:** Stays on Replit/external PostgreSQL
- **API:** Available at `https://your-site.netlify.app/.netlify/functions/api/*`

## Build Output

After `npm run build`:
```
dist/
├── public/              # Frontend (HTML/CSS/JS)
└── netlify/
    └── functions/
        └── api.ts       # Backend API
```

## Environment Variables for Different Stages

### Development (Local)
```
VITE_API_BASE=http://localhost:5000
DATABASE_URL=local-postgres
```

### Production (Netlify)
```
VITE_API_BASE=https://your-site.netlify.app/.netlify/functions/api
DATABASE_URL=production-postgres
```

These are auto-set by the `netlify.toml` `[env]` sections.
