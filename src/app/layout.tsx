import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { SmoothScroll } from '@/components/smooth-scroll';
import ScrollToTopFab from '@/components/scroll-to-top-fab';
import { siteConfig } from '@/lib/data';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = 'https://aionxph.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'AionX IT Solutions',
    template: `%s | AionX IT Solutions`,
  },

  description:
    'AionX IT Solutions is a Philippine-based software company specializing in web development, mobile apps, custom systems, automation, and digital solutions.',

  keywords: [
    'AionX IT Solutions',
    'IT company Philippines',
    'web development Philippines',
    'mobile app development',
    'custom software development',
    'Next.js development',
    'React development',
    'business automation',
    'POS system Philippines',
    'software company Quezon City',
    'SEO services Philippines',
    'digital solutions',
  ],

  authors: [
    {
      name: 'AionX IT Solutions',
      url: siteUrl,
    },
  ],

  creator: 'AionX IT Solutions',
  publisher: 'AionX IT Solutions',

  applicationName: 'AionX IT Solutions',

  category: 'technology',

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: siteUrl,
    siteName: 'AionX IT Solutions',
    title: 'AionX IT Solutions',
    description:
      'Professional web, mobile, and custom software development services in the Philippines.',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AionX IT Solutions',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AionX IT Solutions',
    description:
      'Professional web, mobile, and custom software development services in the Philippines.',
    images: ['/og-image.png'],
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#030712',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-PH" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <SmoothScroll>{children}</SmoothScroll>
        <ScrollToTopFab />
      </body>
    </html>
  );
}
