import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components";

export const metadata: Metadata = {
  title: "MMachado Film"
};

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
      <body className={`${rocGrotesk.className} h-full min-h-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
