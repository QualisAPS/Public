import { Metadata } from 'next';
import AccessibilityPage from '@/screens/AccessibilityPage';

export const metadata: Metadata = {
  title: 'QualisAPS',
  description: 'Sobre'
  // other metadata
};

export default function Accessibility() {
  return (
    <>
      <AccessibilityPage />
    </>
  );
}
