# Assets Folder Structure

This folder contains all the static assets for the Flight Booking website.

## Folder Organization

### `/public/assets/icons/`
- App icons (favicon, apple-touch-icon, etc.)
- UI icons (if not using Lucide React)
- Social media icons
- Feature icons

**Recommended formats:** SVG, PNG (for transparency)
**Naming convention:** `icon-name.svg` or `icon-name.png`

### `/public/assets/logos/`
- Company logo variations
- Partner/airline logos
- Brand assets

**Recommended formats:** SVG (preferred), PNG, JPG
**Naming convention:** 
- `logo.svg` (main logo)
- `logo-white.svg` (white version)
- `logo-dark.svg` (dark version)
- `logo-small.svg` (favicon/small size)

### `/public/assets/images/`
- Hero background images
- Feature section images
- Destination photos
- Marketing images
- Staff photos

**Recommended formats:** JPG, PNG, WebP
**Naming convention:** `descriptive-name.jpg`

## Usage in Components

Import images in your React components like this:

```jsx
import Image from 'next/image'

// For images
<Image 
  src="/assets/images/hero-background.jpg" 
  alt="Flight booking" 
  width={1920} 
  height={1080}
/>

// For logos
<Image 
  src="/assets/logos/logo.svg" 
  alt="FlightBooking Logo" 
  width={200} 
  height={50}
/>

// For icons (if not using Lucide React)
<Image 
  src="/assets/icons/airplane.svg" 
  alt="Airplane" 
  width={24} 
  height={24}
/>
```

## Optimization Tips

1. **Use WebP format** for better compression
2. **Optimize SVGs** using tools like SVGO
3. **Use appropriate dimensions** - don't use oversized images
4. **Consider lazy loading** with Next.js Image component
5. **Provide alt text** for accessibility

## File Size Guidelines

- **Icons:** < 10KB
- **Logos:** < 50KB  
- **Images:** < 500KB (compressed)
- **Hero images:** < 1MB (compressed)

## Current Assets Needed

Based on the website components, you may want to add:

1. **Company logo** (`logo.svg`)
2. **Favicon** (`favicon.ico`)
3. **Feature images** for the three feature cards:
   - `customized-plans.jpg`
   - `deals-offers.jpg` 
   - `support-24-7.jpg`
4. **Hero background** (`hero-bg.jpg`)
5. **Airplane/travel icons** if replacing Lucide React icons

Place your assets in the appropriate folders and update the component imports accordingly.