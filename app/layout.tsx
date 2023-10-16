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
      <div className='flex flex-col min-h-screen mx-auto p-4'>
        <body className={inter.className}>
          <Navigation />
          {children}
          <Footer />
        </body>
      </div>
    </html>
  );
}
