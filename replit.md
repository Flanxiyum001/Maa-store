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
✅ **About Page** with interactive graphics and animations
✅ **Beautiful Logo** with transparent background
✅ **Featured Products** on home page
✅ **Interactive Graphics & Animations** throughout the site
✅ **Social Media Integration** with all platform links

## Product Categories (Live)
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
- **Backend**: Express.js (TypeScript)
- **Styling**: Tailwind CSS + shadcn/ui
- **Routing**: Wouter
- **State Management**: React Query + Zustand
- **Image Handling**: @assets Vite alias for bundling
- **Deployment**: Replit Autoscale (production-ready)

## Running the Project
- **Development**: `cd Feature-List && npm run dev` (runs on port 5000)
- **Build**: `cd Feature-List && npm run build`
- **Production**: `cd Feature-List && npm run start`

## Project Structure
```
Feature-List/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── home.tsx (Hero + Categories + Featured Products)
│   │   │   ├── shop.tsx (Product listing with category filter)
│   │   │   ├── about.tsx (Interactive business story & values)
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
│   └── generated_images/ (23 product & category images)
└── package.json
```

## Important Technical Notes
- **Image Loading**: All images use `@assets` import alias for proper Vite bundling (critical for Netlify deployment)
- **Category Filtering**: Shop page correctly reads URL query parameters and filters products accordingly
- **No Mock Data**: All products are authentic from user's catalog with real pricing
- **Netlify Ready**: Config preserved, deployment-ready for live launch
- **Interactive Elements**: Smooth animations, hover effects, gradient overlays throughout
- **File Optimization**: Cleaned up duplicate and unused images (saved ~8.5MB)

## User Preferences
- WhatsApp broadcast for promotions (not email)
- Keep Netlify deployment configuration unchanged
- Use authentic product data (no mock/placeholder data)
- All category images must use @assets import
- Clean, minimalist design with interactive graphics

## Social Media & Presence
- **YouTube**: https://www.youtube.com/@MaaTLStore_
- **Instagram**: https://www.instagram.com/maatlstore/?hl=en
- **Facebook**: https://www.facebook.com/maatlstore
- **Twitter/X**: https://x.com/MaaTLStore
- **Google Play App**: https://play.google.com/store/apps/details?id=com.maatlstore&pli=1
- **Apple App Store**: https://apps.apple.com/app/maatlstore/id6458098461

## Image Assets (23 Images - Optimized)
**Product Images:**
- Cold-pressed oils (4): Coconut, Groundnut, Mustard, Sesame
- Other products (7): Ghee, Honey, Atta, Dhals, Millets, Dry Fruits, Batter

**Category Cards (11):**
- Cold Pressed Oils, Millets, Dhals & Pulses, Dry Fruits, Daily Essentials
- Masalas, Spices, Snacks & Savories, Health & Cosmetics, Essential Oils, Batters

**Special Images (2):**
- Cold-pressed oils hero image
- Maa Store facility photo

## Recent Changes
1. ✅ Updated daily essentials category image
2. ✅ Added cold-pressed oils products with accurate pricing
3. ✅ Fixed category filtering by reading URL parameters
4. ✅ Created About page with business story and values
5. ✅ Added social media links and app store integrations
6. ✅ Enhanced pages with interactive graphics and animations
7. ✅ Cleaned up duplicate and unused image files (optimized from 29MB to 20.5MB)
8. ✅ Added WhatsApp contact button in footer (visitors can message +91 83400 00987)
9. ✅ Set up project on Replit with Express.js backend and React frontend
10. ✅ Configured deployment for production autoscale
11. ✅ Removed email newsletter signup - replaced with WhatsApp-only contact
12. ✅ Added Privacy Policy page with full content (linked in footer)

## Next Steps (Ready for Launch)
- Click **Publish** button in Replit to go live
- Store is fully functional, optimized, and production-ready
- All 11 categories and products are live
- All pages are interactive with smooth animations

## Important Files
- `Feature-List/client/src/lib/data.ts` - All products and categories
- `Feature-List/client/src/pages/home.tsx` - Hero and category showcase
- `Feature-List/client/src/pages/shop.tsx` - Product browsing with filters
- `Feature-List/client/src/pages/about.tsx` - Company story with graphics
- `Feature-List/vite.config.ts` - Vite configuration with @assets alias
- `Feature-List/client/public/logo.png` - Store logo
- `Feature-List/attached_assets/generated_images/` - 23 optimized images
