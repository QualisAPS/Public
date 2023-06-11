import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeader from './components/SectionHeader';
import WrapperNews from './components/WrapperNews';

export default function NewsPage() {
  return (
    <>
      <Breadcrumbs text="Notícias" />
      <main>
        <SectionHeader />
        <WrapperNews />
      </main>
    </>
  );
}
