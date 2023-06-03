import Banner from './components/Banner';
import AboutSection from './components/AboutSection';
import NewsSection from './components/NewsSection';
import LibrarySection from './components/LibrarySection';
import EventsSection from './components/EventsSection';
import SponsorsSection from './components/Sponsors';

export default function HomePage() {
  return (
    <>
      <Banner />
      <main>
        <AboutSection />
        <NewsSection />
        <LibrarySection />
        <EventsSection />
        <SponsorsSection />
      </main>
    </>
  );
}
