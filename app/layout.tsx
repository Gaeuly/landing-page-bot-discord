import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Moonveil - Premium Discord Bot',
  description: 'The ultimate all-in-one Discord bot with music, moderation, and advanced features',
  openGraph: {
    title: 'Moonveil - Premium Discord Bot',
    description: 'The ultimate all-in-one Discord bot with music, moderation, and advanced features',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moonveil - Premium Discord Bot',
    description: 'The ultimate all-in-one Discord bot with music, moderation, and advanced features',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="starfield" />
        <div className="grain-overlay" />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}