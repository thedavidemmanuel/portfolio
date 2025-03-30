import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Analytics } from "@vercel/analytics/react";
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'David Emmanuel - Software Engineer',
  description: 'Portfolio website showcasing my projects and skills as a Full Stack Developer',
  icons: {
    icon: '/favicon.png', // <--- point to the image in the public folder
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-XT4F77DN0H" 
          strategy="afterInteractive" 
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XT4F77DN0H');
          `}
        </Script>
      </head>
      <body className={`${inter.className} transition-colors duration-300`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}