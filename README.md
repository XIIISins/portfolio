# Portfolio - Senior Platform/Infrastructure Engineer

A modern portfolio website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui showcasing systems work, developer tooling, and reliability engineering.

## Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Beautiful UI**: Dark-first design with glass morphism effects and gradients
- **Responsive Design**: Optimized for all screen sizes
- **Accessible**: Built with Radix UI primitives for excellent accessibility
- **Performance**: Server-side rendering and optimized assets

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 20+ (LTS recommended)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:

```bash
pnpm install
# or
npm install
```

3. Run the development server:

```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── globals.css     # Global styles and design tokens
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── ui/            # shadcn/ui components
│   ├── background.tsx # Background effects
│   ├── navbar.tsx     # Navigation bar
│   └── terminal.tsx   # Terminal component
└── lib/               # Utility functions
    └── utils.ts       # Class name utilities
```

## Design System

### Colors

- **Primary**: #2d5ce0 (Blue)
- **Secondary**: #12D6C7 (Cyan)
- **Background**: Linear gradient from #0d2875 to #370F37
- **Accent**: #E02DB7 (Fuchsia), #FF9A2E (Orange)

### Typography

- **Font**: Inter
- **Headings**: 4xl-6xl, semibold, tracking-tight
- **Body**: Base-17px, relaxed leading

### Components

- **Glass Surfaces**: Rounded corners, backdrop blur, subtle borders
- **Buttons**: Gradient primary, outline glass, ghost variants
- **Cards**: Transparent backgrounds with glass effects

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript type checking

## SEO Configuration

The site includes comprehensive SEO optimization with:

- **Sitemap**: Automatically generated at `/sitemap.xml`
- **Robots.txt**: Configured at `/robots.txt`
- **Meta Tags**: Open Graph, Twitter Cards, and structured data
- **Google Site Verification**: Support for Google Search Console

### Environment Variables

Create a `.env.local` file with the following variables:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://myronjanssen.dev

# SEO Verification (optional)
GOOGLE_SITE_VERIFICATION=your_google_verification_code_here
```

### SEO Features

- **Dynamic Sitemap**: Automatically includes all pages with proper priorities
- **Robots.txt**: Allows crawling while protecting sensitive routes
- **Meta Tags**: Comprehensive Open Graph and Twitter Card support
- **Structured Data**: Ready for rich snippets and enhanced search results

## Deployment

The project can be deployed to Vercel, Netlify, or any other platform that supports Next.js.

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.
