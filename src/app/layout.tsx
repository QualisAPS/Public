'use client';

import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <title> Qualis-APS</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Built with Next.js and TypeScript" />
        <link rel="icon" href="/assets/images/favicon/favicon.ico" />
      </head>

      <body className={`dark:bg-black`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
