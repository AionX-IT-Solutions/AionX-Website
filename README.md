# AionX IT Solutions — Website

Modern marketing site for **AionX IT Solutions** built with Next.js 15, React 19, Tailwind CSS 4, Framer Motion, and React Three Fiber.

## Features

- Interactive **3D hero** (distorted icosahedron, orbit rings, particles)
- **Smooth scroll** via Lenis
- Animated sections: services, filterable project portfolio, process timeline, contact form
- Dark glassmorphism UI with cyan/violet accent gradients
- Mobile-responsive navigation

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

- **Company info & projects**: edit `src/lib/data.ts`
- **Colors & theme**: edit `src/app/globals.css` (`@theme` variables)
- **Contact email/phone**: update `siteConfig` in `data.ts`

## Stack

- [Next.js](https://nextjs.org/) App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Framer Motion](https://www.framer.com/motion/)
- [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) + [drei](https://github.com/pmndrs/drei)
- [Lenis](https://github.com/darkroomengineering/lenis) smooth scroll

## Deploy

Deploy on [Vercel](https://vercel.com) or any Node host:

```bash
npm run build
npm start
```
