import localFont from "next/font/local";
import "./globals.css";
import { Lightbox, Navbar } from "@/components";
import Script from "next/script";
import { Suspense } from "react";
import type { Viewport } from 'next'

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
      // siteId: '1467726470533754880',
      // creator: '@nextjs',
      // creatorId: '1467726470533754880',
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script src="https://player.vimeo.com/api/player.js" />
        <body className={`${rocGrotesk.className} h-full min-h-screen`}>
          <Navbar />
          {children}
        </body>
        <Suspense>
          <Lightbox />
        </Suspense>
    </html>
  );
}
