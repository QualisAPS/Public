import Hero from './components/Hero';
import Supporters from './components/Supporters';
import SectionAbout from './components/SectionAbout';
import SectionNews from './components/SectionNews';
import SectionLibrary from './components/SectionLibrary';

const HomePage = () => {
  return (
    <>
      <Hero />
      <main>
        <Supporters />
        <SectionAbout />
        <SectionNews />
        <SectionLibrary />
      </main>
    </>
  );
};

export default HomePage;
