import localFont from "next/font/local";
import "./globals.css";
import { Lightbox, Navbar } from "@/components";
import Script from "next/script";
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
