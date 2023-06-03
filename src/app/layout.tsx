import React from 'react';
import './globals.css';
import { Roboto } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin']
});

export const metadata = {
  title: 'Qualis APS',
  description:
    'O QualisAPS é o Programa de Qualificação da Atenção Primária à Saúde do Distrito Federal'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
