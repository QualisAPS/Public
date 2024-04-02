import React from 'react';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import LibraryItem from './LibraryItem';
import libraryData from './libraryData';

const SectionLibrary = async () => {
  return (
    <section className="py-20 lg:py-25 xl:py-25">
      <header className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top text-center mx-auto">
          <SectionHeader
            headerInfo={{
              title: `Biblioteca`,
              subtitle: `Biblioteca Digital`,
              description: `O Qualis-APS conta com uma biblioteca virtual.`
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </header>

      <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-10">
          {libraryData.slice(0, 3).map((blog, key) => (
            <LibraryItem blog={blog} key={key} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="/biblioteca"
            aria-labelledby="about"
            className="flex items-center justify-center bg-green hover:bg-green-300 ease-in-out duration-300 text-white text-regular rounded-full py-2.5 px-7.5"
          >
            Biblioteca Completa
          </Link>
          <p id="about" className="sr-only">
            Acesse a pagina com a biblioteca virtual completa
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionLibrary;
