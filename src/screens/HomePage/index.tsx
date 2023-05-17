import Banner from './components/Banner';
import About from './components/About';
import LastNews from './components/News';
import Partners from './components/Partners';

export default function HomePage() {
  return (
    <>
      <Banner />
      <main>
        <About />
        <LastNews />
        <Partners />
      </main>
    </>
  );
}
