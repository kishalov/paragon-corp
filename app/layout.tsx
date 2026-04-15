import { Metadata } from 'next'
import { Source_Serif_4, Source_Sans_3 } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Paragon Corp | Aviation Parts Supply | Your fearless partner for uninterrupted flights',
  description: 'Welcome to Paragon Corp, where we elevate your aviation journey with precision and dedication. As your fearless partner in navigating the complexities of aircraft parts supply, we ensure your luxury flights remain uninterrupted. Our commitment goes beyond just supplying aviation parts; we are devoted to achieving excellence through exceptional quality and unmatched service.',
}

const sourceSerif = Source_Serif_4({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-serif-pro',
  weight: ['700'],
});

const sourceSans = Source_Sans_3({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans-pro',
  weight: ['400', '700'], 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${sourceSans.variable}`}>
      <body className="antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}