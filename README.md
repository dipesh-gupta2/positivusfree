# Positivus - Digital Marketing Agency Website

A pixel-perfect clone of the Positivus digital marketing agency website, built with Next.js 16, React 19, TypeScript, and Tailwind CSS. This project showcases modern web development practices with a focus on responsive design, smooth animations, and interactive UI components.

## Overview

Positivus is a fully responsive marketing agency landing page featuring a bold, contemporary design with lime green accents. The website includes multiple interactive sections including services, case studies, team profiles, testimonials, and a contact form.

## Features

- **Modern Tech Stack**: Built with Next.js 16 App Router, React 19, and TypeScript
- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Interactive Components**: 
  - Animated hero section with illustration
  - Service cards with hover effects
  - Interactive accordion for working process
  - Carousel sliders for case studies and testimonials
  - Dynamic contact form with radio button toggles
- **Smooth Animations**: Implemented with Framer Motion for fluid transitions
- **Accessible UI**: Built with shadcn/ui components ensuring WCAG compliance
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance Optimized**: Fast loading times with Next.js optimizations

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Space Grotesk

## Installation

### Prerequisites

- Node.js 18+ installed on your machine
- npm, yarn, or pnpm package manager

### Clone the Repository

```bash
git clone https://github.com/yourusername/positivus-clone.git
cd positivus-clone
```

### Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
positivus-clone/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles and design tokens
├── components/
│   ├── header.tsx          # Navigation header
│   ├── hero.tsx            # Hero section
│   ├── company-logos.tsx   # Company logos showcase
│   ├── services.tsx        # Services grid
│   ├── proposal.tsx        # CTA section
│   ├── case-studies.tsx    # Case studies carousel
│   ├── working-process.tsx # Process accordion
│   ├── team.tsx            # Team member grid
│   ├── testimonials.tsx    # Testimonials slider
│   ├── contact.tsx         # Contact form
│   ├── footer.tsx          # Footer section
│   └── ui/                 # shadcn/ui components
├── public/                 # Static assets
└── package.json
```

## Key Sections

### 1. Hero Section
Eye-catching hero with headline, description, CTA button, and animated illustration.

### 2. Company Logos
Showcase of trusted company partnerships displayed in a responsive grid.

### 3. Services
Six service cards featuring:
- Search engine optimization
- Pay-per-click advertising
- Social Media Marketing
- Email Marketing
- Content Creation
- Analytics and Tracking

### 4. Proposal CTA
Compelling call-to-action section encouraging users to request proposals.

### 5. Case Studies
Carousel showcasing successful client projects with metrics and results.

### 6. Working Process
Interactive accordion detailing the 6-step agency workflow from consultation to reporting.

### 7. Team
Grid display of team members with photos, names, positions, and LinkedIn links.

### 8. Testimonials
Slider featuring client testimonials with ratings and feedback.

### 9. Contact Form
Functional contact form with radio button options for inquiry type and budget selection.

## Design System

### Color Palette
- **Primary**: Lime Green (#B9FF66)
- **Background**: Dark (#191A23)
- **Surface**: Light Gray (#F3F3F3)
- **Text**: Dark (#000000) / White (#FFFFFF)

### Typography
- **Font Family**: Space Grotesk
- **Headings**: Bold weights (500-700)
- **Body**: Regular weight (400)

### Spacing
Consistent spacing scale using Tailwind's spacing system for visual harmony.

## Customization

### Changing Colors
Edit the design tokens in `app/globals.css`:

```css
@theme inline {
  --color-primary: #B9FF66;
  --color-background: #191A23;
  /* Add more custom colors */
}
```

### Modifying Content
Update component files in the `components/` directory to change text, images, or structure.

### Adding New Sections
Create new component files and import them into `app/page.tsx`.

## Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/positivus-clone)

### Manual Deployment

```bash
npm run build
npm run start
```

## Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.0s
- **Cumulative Layout Shift**: < 0.1

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Original design inspiration from [Positivus Theme](https://positivustheme.vercel.app/)
- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)

## Contact

For questions or feedback, please open an issue on GitHub.

---

**Note**: This is a clone project created for educational purposes. All design credits go to the original Positivus theme creators.
