import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/NavBar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Code ❤️ Dogs',
  description: 'Made with Nextjs for dogs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='px-6 lg:px-20'>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
