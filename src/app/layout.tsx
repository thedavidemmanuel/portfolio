import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Analytics } from "@vercel/analytics/react";

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
      <body className={`${inter.className} transition-colors duration-300`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}