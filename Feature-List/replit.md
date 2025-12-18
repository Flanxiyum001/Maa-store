# Maa Traditional Lifestyle Store

## Overview
E-commerce platform for Maa Traditional Lifestyle Store selling organic cold-pressed oils, traditional food products, and health-focused items from Hyderabad, India.

## Key Features
- **Storefront**: Product browsing, categories, product details, shopping cart
- **Admin Panel**: Dashboard, product management, order management, category management
- **WhatsApp-only contact**: Phone +91 83400 00987 (no email support)
- **Legal Pages**: Privacy Policy, Terms & Conditions, Return/Refund, Shipping, Cancellation policies

## Tech Stack
- **Frontend**: React with TypeScript, Vite, TailwindCSS, shadcn/ui
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Passport.js with session-based auth

## Project Structure
```
Feature-List/
├── client/src/
│   ├── components/     # UI components
│   ├── hooks/          # Custom React hooks (useAuth, useCart, etc.)
│   ├── lib/            # Utilities and query client
│   └── pages/          # Page components
│       ├── admin/      # Admin panel pages
│       └── ...         # Public pages
├── server/
│   ├── auth.ts         # Authentication setup
│   ├── db.ts           # Database connection
│   ├── routes.ts       # API routes
│   └── storage.ts      # Database storage layer
└── shared/
    └── schema.ts       # Database schema (Drizzle)
```

## Admin Panel Access
- URL: `/admin/login`
- First-time setup: Click "First time? Setup admin account" to create initial admin
- Protected routes require admin authentication

## Database Schema
- **users**: User accounts with admin flag
- **products**: Store products with pricing, stock, categories
- **orders**: Customer orders with items, status, shipping info
- **categories**: Product categories

## Recent Changes (Dec 2024)
- Added complete admin panel with product, order, and category management
- Implemented session-based authentication with passport
- Added dashboard with analytics (revenue, orders, products, pending)
- Removed email functionality - WhatsApp-only contact system
- Added all legal policy pages

## User Preferences
- WhatsApp-only customer contact (no email)
- Phone: +91 83400 00987
- Focus on organic, traditional products from Hyderabad

## Running the App
The app runs on port 5000 with both frontend and backend served together.
- Development: `npm run dev`
- Database: Uses PostgreSQL via DATABASE_URL environment variable
