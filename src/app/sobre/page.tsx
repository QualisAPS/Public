import { Metadata } from 'next';
import AboutPage from '@/screens/AboutPage';

export const metadata: Metadata = {
  title: 'QualisAPS',
  description: 'Sobre'
};

export default function About() {
  return (
    <>
      <AboutPage />
    </>
  );
}
