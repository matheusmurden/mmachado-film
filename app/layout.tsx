import localFont from "next/font/local";
import "./globals.css";
import { Lightbox, Navbar } from "@/components";
import Script from "next/script";
import type { Viewport } from 'next'
import { Suspense } from "react";

const rocGrotesk = localFont({
  src: [
    {
      path: '../public/RocGroteskRegular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/RocGroteskBold.woff2',
      weight: '700',
      style: 'normal'
    },
  ],
  display: 'swap'
});

 
export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: 'black'
}

export async function generateMetadata() {
  return {
    title: 'Maria MMachado | Film Editor',
    description: 'High-end Film Editor from Brazil.',
    authors: ['Maria Machado'],
    web_author: 'https://murden.dev',
    openGraph: {
      siteName: 'Maria MMachado | Film Editor',
      title: 'Maria MMachado | Film Editor',
      description: 'High-end Film Editor from Brazil.',
      authors: ['Maria Machado'],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Maria MMachado | Film Editor',
      description: 'High-end Film Editor from Brazil.',
    },
    icon: [
      {
        rel: 'icon',
        url: '/favicon.ico',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/favicon-512x512.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/favicon-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        url: '/apple-touch-icon.png',
      },
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">      
        <body className={`${rocGrotesk.className} h-full min-h-screen`}>
          <Navbar />
          {children}
          <Suspense>
            <Lightbox />
          </Suspense>
        </body>
    </html>
  );
}
