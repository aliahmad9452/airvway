# Flight Booking Website

A modern flight booking website built with React, Next.js, and Tailwind CSS, inspired by Airwayy.com.

## Features

- **Flight Search**: Comprehensive search form with round-trip/one-way options
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Modern UI**: Clean and intuitive user interface with Tailwind CSS
- **Popular Routes**: Display of popular flight routes with interactive cards
- **Destinations Grid**: Alphabetically organized destinations list
- **Features Section**: Highlighting key benefits and services
- **Contact Information**: 24/7 support contact details

## Technologies Used

- **Next.js 14**: React framework with App Router
- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icons
- **Date-fns**: Date manipulation library

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd flight-booking
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Available Scripts

- `npm run dev`: Starts the development server
- `npm run build`: Builds the app for production
- `npm start`: Runs the built app in production mode
- `npm run lint`: Runs the linter

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── FlightSearch.tsx   # Flight search form
│   ├── FeaturesSection.tsx # Features/benefits section
│   ├── PopularRoutes.tsx  # Popular routes display
│   └── DestinationsGrid.tsx # Destinations list
```

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary colors: Blue theme (customizable)
- Secondary colors: Gray theme

### Content
Update the following for your specific needs:
- Contact information in `Header.tsx` and `Footer.tsx`
- Popular routes in `PopularRoutes.tsx`
- Destinations list in `DestinationsGrid.tsx`
- Feature descriptions in `FeaturesSection.tsx`

## Deployment

The app can be deployed to any platform that supports Next.js:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the .next folder to Netlify
```

### Other Platforms
Build the project and deploy the generated files:
```bash
npm run build
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@flightbooking.com or call (877) 738-0231.

## Acknowledgments

- Design inspired by Airwayy.com
- Icons by Lucide React
- Built with Next.js and Tailwind CSS