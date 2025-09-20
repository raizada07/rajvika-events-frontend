import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '../components/Header'; // Import the Header component

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rajvika Event Planners - Crafting Royal Celebrations',
  description: 'Luxury event planning for bespoke weddings, corporate galas, and exclusive private parties.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Header /> {/* Header ko yahan add karein */}
        <main className="pt-[120px]"> {/* Header ki height ke according padding */}
          {children}
        </main>
      </body>
    </html>
  );
}