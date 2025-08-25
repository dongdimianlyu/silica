import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SilicaGel Pro - Premium Silica Gel Solutions for Industrial Applications",
  description: "Leading manufacturer and distributor of premium silica gel desiccants for moisture control in electronics, pharmaceuticals, food packaging, and industrial applications.",
  keywords: "silica gel, desiccant, moisture control, industrial packaging, electronics protection, pharmaceutical drying, food preservation",
  authors: [{ name: "SilicaGel Pro" }],
  creator: "SilicaGel Pro",
  publisher: "SilicaGel Pro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://silicagelpro.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "SilicaGel Pro - Premium Industrial Silica Gel Solutions",
    description: "Reliable moisture control and desiccant products for manufacturing, packaging, and industrial processes.",
    url: "https://silicagelpro.com",
    siteName: "SilicaGel Pro",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SilicaGel Pro - Industrial Silica Gel Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SilicaGel Pro - Premium Industrial Silica Gel Solutions",
    description: "Reliable moisture control and desiccant products for manufacturing, packaging, and industrial processes.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
