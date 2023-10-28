import './globals.css';
import type { Metadata } from 'next';
import Navigation from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Code ❤️ Dogs',
  description: 'Made with Nextjs for dogs',
  manifest: '/manifest.json',
  viewport: 'width=device-width, initial-scale=1',
  icons: ['/favicon.ico'],
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // we want to exclude the navbar from the sanity studio route
  if (
    typeof window !== 'undefined' &&
    window.location.pathname.includes('/studio')
  ) {
    return <>{children}</>;
  }

  return (
    <html lang='en'>
      <body className='bg-neutral-50 text-gray-900 font-sans antialiased  px-8 md:px-12  mx-auto'>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
