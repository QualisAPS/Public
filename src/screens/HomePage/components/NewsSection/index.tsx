import Link from 'next/link';
import { MdNewspaper } from 'react-icons/md';
import NewsCard from '@/components/NewsCard';

export default function NewsSection() {
  return (
    <section className="mx-auto mt-11 max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
      <header className="flex items-center gap-4 rounded-2xl bg-ocean p-2">
        <MdNewspaper className="text-5xl" aria-hidden="true" />
        <h2 className="text-2xl font-medium text-[#141414] md:text-4xl">
          Últimas Notícias
        </h2>
      </header>
      <div className="mt-8 flex flex-wrap justify-between gap-3">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <footer className="mt-4 flex justify-center">
        <Link
          href="/noticias"
          className="mt-2 rounded-xl bg-button p-3 text-lg font-medium text-white"
          aria-labelledby="about"
        >
          Acesse todos as notícias
        </Link>
      </footer>
    </section>
  );
}
