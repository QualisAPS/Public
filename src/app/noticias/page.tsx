import { Metadata } from 'next';
import NewsPage from '@/screens/NewsPage';

export const metadata: Metadata = {
  title: 'QualisAPS',
  description: 'Sobre'
  // other metadata
};

export default function News() {
  return (
    <>
      <NewsPage />
    </>
  );
}
