# Portfolio Website

A modern, dark-themed web developer portfolio built with Next.js 14+, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern dark theme with neon blue/purple accents
- 📱 Fully responsive design (mobile, tablet, desktop)
- ✨ Smooth animations and transitions using Framer Motion
- 🎯 Typing animation effect for job titles
- 📊 Animated progress bars for skills
- 🎴 Interactive project cards with hover effects
- 🧭 Fixed sidebar navigation with active section highlighting
- 🎭 Scroll-triggered animations

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Animations**: Framer Motion
- **Fonts**: Inter (via Next.js)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Add your images:
   - Place your avatar image at `public/images/avatar.png`
   - Add project images: `project1.jpg`, `project2.jpg`, `project3.jpg`, `project4.jpg` in `public/images/`

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Sidebar.tsx         # Navigation sidebar
│   ├── Hero.tsx            # Hero section
│   ├── Skills.tsx          # Skills section
│   ├── Portfolio.tsx       # Portfolio section
│   ├── Contact.tsx         # Contact section
│   └── ui/
│       ├── ProgressBar.tsx # Progress bar component
│       └── ProjectCard.tsx # Project card component
├── lib/
│   └── utils.ts            # Utility functions
├── types/
│   └── index.ts            # TypeScript types
└── public/
    └── images/             # Image assets
```

## Customization

### Update Personal Information

1. **Hero Section**: Edit `components/Hero.tsx` to change name, job titles, and description
2. **Skills**: Modify the `skills` array in `components/Skills.tsx`
3. **Projects**: Update the `projects` array in `components/Portfolio.tsx`
4. **Contact**: Edit contact information in `components/Contact.tsx`

### Colors

Customize colors in `tailwind.config.ts`:
- `neon-blue`: Primary accent color
- `neon-purple`: Secondary accent color
- `neon-green`: Success/accent color
- `background-dark` and `background-darker`: Background colors

### Typography

Font is configured in `app/layout.tsx`. You can change it by importing a different font from `next/font/google`.

## Build for Production

```bash
npm run build
npm start
```

## License

MIT
