import Hero from './components/Hero';
import SectionSupporters from './components/SectionSupporters';
import SectionAbout from './components/SectionAbout';
import SectionNews from './components/SectionNews';
import SectionLibrary from './components/SectionLibrary';

const HomePage = () => {
  return (
    <>
      <Hero />
      <main>
        <SectionSupporters />
        <SectionAbout />
        <SectionNews />
        <SectionLibrary />
      </main>
    </>
  );
};

export default HomePage;
