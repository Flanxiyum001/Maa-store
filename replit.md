# Maa Traditional Lifestyle Store - E-Commerce Platform

## Project Overview
A modern, responsive e-commerce store for **Maa Traditional Lifestyle Store**, a manufacturer and retailer of cold-pressed oils and traditional food products from Hyderabad, India.

### Business Information
- **Company**: Maa Traditional Lifestyle Store
- **Focus**: Stone-pressed, chemical-free edible oils and traditional tribal/forest products
- **Products**: Cold-pressed oils (groundnut, coconut, sesame, mustard, safflower, castor), essential oils, and traditional foods (rice, millet, jaggery, ghee)
- **Unique Value**: All products are in-house manufactured, no branded products. Direct partnerships with tribal communities to ensure fair trade and empower local economies
- **Mission**: Provide pure, authentic products while elevating tribal communities and preserving cultural heritage

## Current Features
✅ **11 Visual Category Cards** with user-provided product photos
✅ **16 Products** across all categories with accurate pricing
✅ **Shopping Cart & Checkout** functionality
✅ **Responsive Design** (mobile, tablet, desktop)
✅ **Category Filtering** on shop page (with URL parameter support)
✅ **About Page** with full business story and values
✅ **Beautiful Logo** with transparent background
✅ **Featured Products** on home page

## Product Categories (In Development/Active)
1. Cold Pressed Edible Oils - 7 products
2. Millet / Rice / Flakes
3. Dhals & Pulses
4. Dry Fruits
5. Daily Essentials
6. Daily Masala
7. Spices
8. Snacks / Savories
9. Natural / Plant based Health / Cosmetics
10. Essential Oils
11. Batter / Traditional Batters

## Technology Stack
- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Routing**: Wouter
- **State Management**: React Query
- **Image Handling**: @assets Vite alias for bundling
- **Deployment**: Netlify (production-ready)

## Project Structure
```
Feature-List/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── home.tsx (Hero + Categories + Featured Products)
│   │   │   ├── shop.tsx (Product listing with category filter)
│   │   │   ├── about.tsx (Business story & values)
│   │   │   ├── product-details.tsx
│   │   │   └── checkout.tsx
│   │   ├── components/
│   │   │   ├── category-card.tsx
│   │   │   ├── product-card.tsx
│   │   │   ├── layout/ (Navbar, Footer)
│   │   │   └── ui/ (Button, Cart, etc)
│   │   ├── lib/
│   │   │   └── data.ts (Products, Categories, Images)
│   │   └── index.css
│   ├── public/
│   │   └── logo.png (Transparent background)
│   └── vite.config.ts
├── attached_assets/
│   └── generated_images/ (All product & category images)
└── package.json
```

## Important Technical Notes
- **Image Loading**: All images use `@assets` import alias for proper Vite bundling (critical for Netlify deployment)
- **Category Filtering**: Shop page now correctly reads URL query parameters and filters products accordingly
- **No Mock Data**: All products are authentic from user's catalog with real pricing
- **Netlify Ready**: Config preserved, deployment-ready for live launch

## User Preferences
- WhatsApp broadcast for promotions (not email)
- Keep Netlify deployment configuration unchanged
- Use authentic product data (no mock/placeholder data)
- All category images must use @assets import

## Recent Changes
1. ✅ Updated daily essentials category image
2. ✅ Added cold-pressed oils products with accurate pricing
3. ✅ Fixed category filtering by reading URL parameters
4. ✅ Created About page with business story and values

## Next Steps (Ready for Launch)
- Click **Publish** button in Replit to go live
- Store is fully functional and production-ready
- All 11 categories and products are live

## Important Files
- `Feature-List/client/src/lib/data.ts` - All products and categories
- `Feature-List/client/src/pages/home.tsx` - Hero and category showcase
- `Feature-List/client/src/pages/shop.tsx` - Product browsing with filters
- `Feature-List/client/src/pages/about.tsx` - Company story
- `Feature-List/vite.config.ts` - Vite configuration with @assets alias
- `Feature-List/client/public/logo.png` - Store logo

## Social Media & Presence
- **YouTube**: https://www.youtube.com/@MaaTLStore_
- **Instagram**: https://www.instagram.com/maatlstore/?hl=en
- **Facebook**: https://www.facebook.com/maatlstore
- **Twitter/X**: https://x.com/MaaTLStore
- **Google Play App**: https://play.google.com/store/apps/details?id=com.maatlstore&pli=1
- **Apple App Store**: https://apps.apple.com/app/maatlstore/id6458098461
