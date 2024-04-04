import Breadcrumb from '@/components/Breadcrumb';
import SectionTitle from './components/SectionTitle';
import WrapperCards from './components/WrapperCards';

const LibraryPage = ({
  searchParams
}: {
  searchParams?: {
    titulo?: string;
    ano?: string;
  };
}) => {
  const titulo = searchParams?.titulo || '';
  const ano = Number(searchParams?.ano) || 0;
  return (
    <>
      <Breadcrumb pageName="Biblioteca" />
      <main>
        <SectionTitle />
        <WrapperCards titulo={titulo} ano={ano} />
      </main>
    </>
  );
};

export default LibraryPage;
