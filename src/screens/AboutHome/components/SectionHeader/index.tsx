import { MdHistoryEdu } from 'react-icons/md';
import SectionArticle from '../SectionArticle';

export default function SectionHeader() {
  return (
    <section className="mx-auto mt-8 max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
      <header className="flex items-center justify-center gap-4 rounded-2xl bg-yellow p-2">
        <MdHistoryEdu className="text-5xl" />
        <h2 className="text-2xl font-medium text-[#141414] md:text-4xl">
          Quem Somos
        </h2>
      </header>
      <SectionArticle />
    </section>
  );
}
