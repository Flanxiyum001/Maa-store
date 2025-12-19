# Google OAuth Setup Guide

## What's Been Implemented

Your e-commerce store now has Google OAuth authentication integrated. Users can sign in using their Google account.

## Configuration Steps

### 1. Google Cloud Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API:
   - Go to APIs & Services > Library
   - Search for "Google+ API"
   - Click Enable
4. Create OAuth 2.0 Credentials:
   - Go to APIs & Services > Credentials
   - Click "Create Credentials" > "OAuth client ID"
   - Choose "Web application"
   - Add authorized redirect URIs:
     - For Replit (development): `https://your-replit-domain.replit.dev/api/auth/google/callback`
     - For Netlify (production): `https://your-netlify-domain.com/api/auth/google/callback`

### 2. Add Environment Variables

Set these environment variables in your Replit project:

**Shared (Development & Production):**
- `GOOGLE_CLIENT_ID` - Your Google OAuth Client ID
- `GOOGLE_CLIENT_SECRET` - Your Google OAuth Client Secret
- `GOOGLE_CALLBACK_URL` - Your callback URL (e.g., `https://your-domain.com/api/auth/google/callback`)

For Netlify production deployment, set these in your Netlify environment variables.

## How It Works

1. **User clicks "Login with Google"** on the login page
2. **Redirected to Google** for authentication
3. **Google redirects back** to your app at `/api/auth/google/callback`
4. **Backend validates** the Google token and either:
   - Finds existing user by email and logs them in
   - Creates new user account using Google profile info (email, name)
5. **User is logged in** and redirected to home page

## Backend Implementation

### Modified Files:

1. **server/auth.ts** - Added Google OAuth Strategy setup
2. **server/routes.ts** - Added Google OAuth endpoints
3. **server/storage.ts** - Added getUserByEmail method for OAuth lookups

### Frontend Implementation:

1. **client/src/pages/login.tsx** - Added Google login button and handler

## Security Notes

- OAuth users get a random secure password (they can't use password login)
- Users are matched by email, so same email = same account
- Sessions are secure with httpOnly cookies
- Production uses secure cookies when NODE_ENV=production

## Testing in Replit

1. Set `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`
2. Set `GOOGLE_CALLBACK_URL` to your Replit dev domain callback URL
3. Click "Login with Google" button
4. You'll be redirected to Google, authenticate, and return to your app

## Netlify Deployment

When deploying to Netlify:

1. Add environment variables in Netlify dashboard:
   - GOOGLE_CLIENT_ID
   - GOOGLE_CLIENT_SECRET
   - GOOGLE_CALLBACK_URL (pointing to your Netlify domain)

2. The backend will automatically use these variables

3. Update your Google OAuth credentials with the Netlify redirect URL

## Troubleshooting

**"Redirect URI mismatch" error:**
- Make sure the callback URL in your code matches exactly what's in Google Console
- Include https:// and the full path `/api/auth/google/callback`

**Google login button not working:**
- Verify GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET are set
- Check browser console for errors
- Ensure callback URL is correct in environment variables
