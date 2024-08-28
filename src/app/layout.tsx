import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import Navbar from "./components/Navbar";
import { cn } from "@/lib/utils"
import { siteMetaData } from '@/metaData'
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: siteMetaData.title,
  description: siteMetaData.description,
  authors: {
    name: siteMetaData.author
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: siteMetaData.title,
    description: siteMetaData.description,
    url: 'https://nextjs.org',
    siteName: '...',
    locale: 'pt_BR',
    type: 'website'
  },
  keywords: ['blog', 'livros', 'investimento', 'historia', 'biografia', 'fantasia', 'tencologia'],
  twitter: {
    
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-amber-100 font-sans antialiased",
          fontSans.variable
        )}>
        <Navbar />
        <div className="mx-auto w-10/12 px-4 sm:px-6 lg:px-8">
          { children }
        </div>
      </body>
    </html>
  );
}
