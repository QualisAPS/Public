import { MdCalendarMonth } from 'react-icons/md';
import LibraryCard from '@/components/LibraryCard';

export default function EventsSection() {
  return (
    <section className="mx-auto mt-11 max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
      <header className="flex items-center gap-4 rounded-2xl bg-gray p-2">
        <MdCalendarMonth className="text-5xl" aria-hidden="true" />
        <h2 className="text-2xl font-medium text-[#141414] md:text-4xl">
          Eventos
        </h2>
      </header>
      <div className="mt-8 flex flex-wrap justify-between gap-3">
        <LibraryCard />
        <LibraryCard />
        <LibraryCard />
      </div>
      {/*
      <footer className="mt-4 flex justify-center">
        <Link
          href="/noticias"
          className="mt-2 rounded-xl bg-button p-3 text-lg font-medium text-white"
          aria-labelledby="about"
        >
          Acesse a Biblioteca Completa
        </Link>
      </footer>
      */}
    </section>
  );
}
