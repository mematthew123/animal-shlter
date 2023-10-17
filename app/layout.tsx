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
      <body className='bg-gray-50 text-gray-900 outline-4 font-sans antialiased px-12  mx-auto'>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
