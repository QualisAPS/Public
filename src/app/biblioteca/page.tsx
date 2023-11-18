import { Metadata } from 'next';
import LibraryPage from '@/screens/LibraryPage';

export const metadata: Metadata = {
  title: 'QualisAPS',
  description: 'Sobre'
  // other metadata
};

export default function Library() {
  return (
    <>
      <LibraryPage />
    </>
  );
}
