import { Metadata } from 'next';
import AboutPage from '@/screens/AboutPage';

export const metadata: Metadata = {
  title: 'QualisAPS',
  description: 'Sobre'
  // other metadata
};

export default function About() {
  return (
    <>
      <AboutPage />
    </>
  );
}
