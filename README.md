# Saurabh Kumar Tiwari — Portfolio

Modern personal portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css        # Tailwind + custom CSS
│   ├── layout.tsx         # Root layout, fonts, metadata, theme
│   └── page.tsx           # Main page composing all sections
├── components/
│   ├── ThemeProvider.tsx   # Dark/light mode context
│   ├── AnimatedBackground.tsx
│   ├── Navbar.tsx         # Fixed nav with smooth scroll
│   ├── Hero.tsx           # Hero with typing animation
│   ├── About.tsx          # Bio & quick-info cards
│   ├── Skills.tsx         # Categorized skill chips
│   ├── Services.tsx       # Service offering cards
│   ├── Projects.tsx       # Filterable project grid
│   ├── Contact.tsx        # Contact form + info
│   ├── Footer.tsx         # Footer with socials
│   └── SectionHeading.tsx # Reusable heading component
├── lib/
│   ├── data.ts            # All portfolio content (single source of truth)
│   └── utils.ts           # Utility functions
├── public/
│   └── images/            # Project screenshots & assets
├── tailwind.config.ts
├── next.config.js
└── .env.local             # Environment variables
```

## Features

- **App Router** (Next.js 15)
- **Dark / Light mode** with system preference detection
- **Framer Motion** animations & page transitions
- **Responsive** mobile-first design
- **SEO optimized** with Open Graph & Twitter cards
- **Accessible** (ARIA labels, keyboard navigation, semantic HTML)
- **Contact form** via FormSubmit
- **Single source of truth** — all content in `lib/data.ts`

## Tech Stack

Next.js · TypeScript · Tailwind CSS · Framer Motion · Lucide Icons · react-type-animation
