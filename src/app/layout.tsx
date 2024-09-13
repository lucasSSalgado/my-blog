import type { Metadata } from "next";
import { Work_Sans as WorkSans } from "next/font/google"
import "./globals.css";
import Navbar from "./components/Navbar";
import { cn } from "@/lib/utils"
import { siteMetaData } from '@/metaData'
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/theme-provider";

const workSans = WorkSans({
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
    <html lang="pt-BR">
      <body className={cn( "min-h-screen bg-secondary font-sans antialiased", workSans.variable )}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Navbar />
            <div className="md:w-10/12 mx-auto w-11/12 flex flex-col min-h-lvh px-4 sm:px-6 lg:px-8">
              { children }
            </div>
          <Footer />
          </ThemeProvider>
        
      </body>
    </html>
  );
}
