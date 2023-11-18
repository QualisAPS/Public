import Breadcrumb from '@/components/Breadcrumb';
import SectionNews from './components/SectionNews';

const NewsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Notícias"
      />
      <main>
        <SectionNews />
      </main>
    </>
  );
};

export default NewsPage;
