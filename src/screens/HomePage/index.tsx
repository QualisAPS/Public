import Hero from './components/Hero';
import Brands from './components/Brands';
import SectionAbout from './components/SectionAbout';
import SectionNews from './components/SectionNews';
import SectionLibrary from './components/SectionLibrary';

const HomePage = () => {
  return (
    <>
      <Hero />
      <main>
        <Brands />
        <SectionAbout />
        <SectionNews />
        <SectionLibrary />
      </main>
    </>
  );
};

export default HomePage;
