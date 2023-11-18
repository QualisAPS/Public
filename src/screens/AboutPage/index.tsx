import SectionAbout from './components/SectionAbout';
import Breadcrumb from '@/components/Breadcrumb';
import Timeline from "@/screens/AboutPage/components/Timeline";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Sobre"
      />
      <main>
        <SectionAbout />
        <Timeline />
      </main>
    </>
  );
};

export default AboutPage;
