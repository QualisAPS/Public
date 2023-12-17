'use client';

import SectionLibrary from '../SectionLibrary';
import Filter from '../Filter';
import { useDebouncedCallback } from 'use-debounce';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function WrapperCards({
  titulo,
  ano,
}: {
    titulo: string;
    ano: number;
  }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  
  
  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('titulo', term);
    } else {
      params.delete('titulo');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);
  
  return (
    <>
      <title>{`Biblioteca Digital - QualisAPS`}</title>
      <section className="pb-20">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col lg:flex-row gap-9.5 xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-3.5 mb-10">
                <div className="flex flex-col gap-1">
                  <label
                    className="text-zinc-800 dark:text-white"
                    htmlFor="titulo"
                  >
                    Filtrar pelo título
                  </label>
                  <input
                    type="text"
                    id="titulo"
                    placeholder="Pesquisar..."
                    className="w-full dark:bg-black border border-stroke dark:border-strokedark shadow-solid-12 dark:shadow-none rounded-lg focus:outline-none focus:border-primary dark:focus:border-primary py-4 px-6"
                    onChange={(e) => {
                      handleSearch(e.target.value);
                    }}
                    defaultValue={searchParams.get('titulo')?.toString()}
                    autoComplete="off"
                  />
                </div>
                <div className="mt-4">
                  <Filter />
                </div>
              </div>
            </div>
            <div className="lg:w-3/3">
              <SectionLibrary />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
