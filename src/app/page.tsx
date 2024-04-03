import { Metadata } from 'next';
import HomePage from '@/screens/HomePage';

export const metadata: Metadata = {
  title: 'QualisAPS',
  description: 'Pagina inicial'
  // other metadata
};

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
