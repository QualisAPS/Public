import Breadcrumb from '@/components/Breadcrumb';
import SectionTitle from './components/SectionTitle';
import WrapperCards from './components/WrapperCards';

const LibraryPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Biblioteca"
      />
      <main>
        <SectionTitle />
        <WrapperCards />
      </main>
    </>
  );
};

export default LibraryPage;
